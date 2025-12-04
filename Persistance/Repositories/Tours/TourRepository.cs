using DomainLayer.Models.Tours;
using DomainLayer.RepositoryInterface.Tours;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance.Repositories.Tours
{
    public class TourRepository : ITourRepository
    {
        private readonly ApplicationDbContext _dbcontext;

        public TourRepository(ApplicationDbContext context)
        {
            _dbcontext = context;
        }

        public async Task<IEnumerable<Tour>> GetAllAsync()
        {
            return await _dbcontext.Tours
                .Include(t => t.TourDestinations)
                .Include(t => t.AvailableDates)
                .ToListAsync();
        }

        public async Task<Tour?> GetByIdAsync(int id)
        {
            return await _dbcontext.Tours
                .Include(t => t.TourDestinations)
                .Include(t => t.AvailableDates)
                .Include(t => t.Itineraries)
                .Include(t => t.Inclusions)
                .FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task<IEnumerable<Tour>> GetFeaturedToursAsync()
        {
            return await _dbcontext.Tours
                .Where(t => t.BasePrice >= 300)
                .Take(5)
                .ToListAsync();
        }

        public async Task<IEnumerable<Tour>> SearchAsync(string? destination, decimal? minPrice, decimal? maxPrice, DateTime? startDate)
        {
            var query = _dbcontext.Tours.AsQueryable();
            
            if (minPrice.HasValue)
                query = query.Where(t => t.BasePrice >= minPrice.Value);

            if (maxPrice.HasValue)
                query = query.Where(t => t.BasePrice <= maxPrice.Value);

            if (startDate.HasValue)
                query = query.Where(t => t.AvailableDates.Any(d => d.StartDate >= startDate.Value));

            return await query
             .Include(t => t.TourDestinations)
             .Include(t => t.AvailableDates)
             .ToListAsync();
        }
        public async Task AddAsync(Tour tour)
        {
            await _dbcontext.Tours.AddAsync(tour);
        }

        public void Update(Tour tour)
        {
            _dbcontext.Tours.Update(tour);
        }
        public void Delete(Tour tour)
        {
            _dbcontext.Tours.Remove(tour);
        }
        public async Task SaveChangesAsync()
        {
            await _dbcontext.SaveChangesAsync();
        }
    }
}
