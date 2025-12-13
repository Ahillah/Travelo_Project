using DomainLayer.Models.Booking_Transaction;
using DomainLayer.Models.Identity;
using DomainLayer.RepositoryInterface;
using Microsoft.Extensions.Configuration;
using ServiceAbstraction;
using Stripe;

namespace ServiceImplementation
{
    public class PaymentService : IPaymentService
    {
        private readonly IConfiguration _configuration;
        private readonly IGenericRepository<Booking> _bookingRepo;
        private readonly IGenericRepository<Payment> _paymentRepo;
        private readonly IGenericRepository<Transaction> _transactionRepo;

        public PaymentService(
            IConfiguration configuration,
            IGenericRepository<Booking> bookingRepo,
            IGenericRepository<Payment> paymentRepo,
            IGenericRepository<Transaction> transactionRepo)
        {
            _configuration = configuration;
            _bookingRepo = bookingRepo;
            _paymentRepo = paymentRepo;
            _transactionRepo = transactionRepo;
        }

        public async Task<Booking> CreateOrUpdatePaymentIntent(int bookingId)
        {
            StripeConfiguration.ApiKey = _configuration["Stripe:SecretKey"];

            var booking = await _bookingRepo.GetAsync(bookingId);
            if (booking == null) return null;

            long amount = (long)(booking.TotalPrice * 100);

            var service = new PaymentIntentService();
            PaymentIntent intent;

            if (string.IsNullOrEmpty(booking.PaymentIntentId))
            {
                var createOptions = new PaymentIntentCreateOptions
                {
                    Amount = amount,
                    Currency = "usd",
                    PaymentMethodTypes = new List<string> { "card" }
                };

                intent = await service.CreateAsync(createOptions);

                booking.PaymentIntentId = intent.Id;
                booking.ClientSecret = intent.ClientSecret;
                booking.PaymentStatus = "Pending";

                var payment = new Payment
                {
                    BookingId = booking.Id,
                    UserId = booking.UserId,
                    Amount = booking.TotalPrice,
                    Status = "Pending",
                    PaymentMethod = "Stripe",
                    CreatedAt = DateTime.UtcNow
                };

                await _paymentRepo.AddAsync(payment);
            }
            else
            {
                var updateOptions = new PaymentIntentUpdateOptions { Amount = amount };
                intent = await service.UpdateAsync(booking.PaymentIntentId, updateOptions);
            }

            await _bookingRepo.UpdateAsync(booking);
            return booking;
        }

        public async Task<bool> UpdatePaymentStatus(string paymentIntentId, bool isPaid)
        {
            var booking = (await _bookingRepo.GetAllAsync())
                .FirstOrDefault(x => x.PaymentIntentId == paymentIntentId);

            if (booking == null) return false;

            var payment = (await _paymentRepo.GetAllAsync())
                .FirstOrDefault(x => x.BookingId == booking.Id);

            if (payment == null) return false;

            payment.Status = isPaid ? "Paid" : "Failed";
            booking.PaymentStatus = isPaid ? "Paid" : "Failed";

            await _paymentRepo.UpdateAsync(payment);
            await _bookingRepo.UpdateAsync(booking);

            if (isPaid)
            {
                var transaction = new Transaction
                {
                    BookingId = booking.Id,
                    PaymentId = payment.Id,
                    Amount = payment.Amount,
                    Status = "Completed",
                    PaymentMethod = payment.PaymentMethod,
                    PaymentIntentId = booking.PaymentIntentId,
                    TransactionDate = DateTime.UtcNow
                };
                await _transactionRepo.AddAsync(transaction);
            }

            return true;
        }

   
        public async Task<bool> ConfirmPayment(string paymentIntentId)
        {
            StripeConfiguration.ApiKey = _configuration["Stripe:SecretKey"];

            var service = new PaymentIntentService();

            try
            {
                // Confirm Payment on Stripe
                var intent = await service.ConfirmAsync(paymentIntentId);

                bool isPaid = intent.Status == "succeeded";

                // Update DB Status
                var booking = (await _bookingRepo.GetAllAsync())
                    .FirstOrDefault(x => x.PaymentIntentId == paymentIntentId);

                if (booking == null)
                    return false;

                booking.Status = isPaid ? "Paid" : "Failed";
                await _bookingRepo.UpdateAsync(booking);

                var payment = (await _paymentRepo.GetAllAsync())
                    .FirstOrDefault(x => x.BookingId == booking.Id);

                if (payment != null)
                {
                    payment.Status = isPaid ? "Paid" : "Failed";
                    await _paymentRepo.UpdateAsync(payment);
                }

                return isPaid;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Payment Confirmation Error: " + ex.Message);
                return false;
            }
        }

     
    }

}





