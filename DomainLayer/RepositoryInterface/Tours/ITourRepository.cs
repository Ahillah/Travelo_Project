using DomainLayer.Models.Tours;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainLayer.RepositoryInterface.Tours
{
    public interface ITourRepository
    {
        Task<IEnumerable<Tour>> GetAllAsync();
        Task<Tour?> GetByIdAsync(int id);
        Task<IEnumerable<Tour>> GetFeaturedToursAsync();
        Task<IEnumerable<Tour>> SearchAsync(string? destination, decimal? minPrice, decimal? maxPrice, DateTime? startDate);
        Task AddAsync(Tour tour);
        void Update(Tour tour);
        void Delete(Tour tour);
        Task SaveChangesAsync();
    }
}
