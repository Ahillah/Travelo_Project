using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainLayer.RepositoryInterface
{
    public interface IGenericRepository<TEntity> where TEntity : class 
    {
        Task<IReadOnlyList<TEntity>> GetAllAsync();
        Task<TEntity> GetAsync(int id );
        Task AddAsync(TEntity entity);
        Task UpdateAsync(TEntity entity);
        Task DeleteAsync(TEntity entity);
    }
}
