using Microsoft.AspNetCore.Mvc;
using ServiceAbstraction;
using Shared.Dto_s.Payment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentController : ControllerBase
    {
        private readonly IPaymentService _paymentService;

        public PaymentController(IPaymentService paymentService)
        {
            _paymentService = paymentService;
        }

        [HttpPost("create-intent/{bookingId}")]
        public async Task<IActionResult> CreateIntent(int bookingId)
        {
            var result = await _paymentService.CreateOrUpdatePaymentIntent(bookingId);

            if (result == null)
                return BadRequest("Booking not found");

            return Ok(new
            {
                clientSecret = result.ClientSecret,
                paymentIntentId = result.PaymentIntentId
            });
        }

        [HttpPost("confirm")]
        public async Task<IActionResult> ConfirmPayment([FromBody] ConfirmPaymentDto dto)
        {
            var success = await _paymentService.ConfirmPayment(dto.PaymentIntentId);

            if (!success)
                return BadRequest("Payment confirmation failed");

            return Ok(new
            {
                success = true,
                message = "Payment completed"
            });
        }
    }

}


