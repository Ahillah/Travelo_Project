using DomainLayer.RepositoryInterface;
using Microsoft.EntityFrameworkCore;

namespace Persistance.RepositoryImplemention
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
            private readonly ApplicationDbContext _context;

            public GenericRepository(ApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<IReadOnlyList<TEntity>> GetAllAsync()
            {
                return await _context.Set<TEntity>().ToListAsync();
            }

            public async Task<TEntity> GetAsync(int id)
            {
                return await _context.Set<TEntity>().FindAsync(id);
            }

            public async Task AddAsync(TEntity entity)
            {
                await _context.Set<TEntity>().AddAsync(entity);
                await _context.SaveChangesAsync();
            }

            public async Task UpdateAsync(TEntity entity)
            {
                _context.Set<TEntity>().Update(entity);
                await _context.SaveChangesAsync();
            }

            public async Task DeleteAsync(TEntity entity)
            {
                _context.Set<TEntity>().Remove(entity);
                await _context.SaveChangesAsync();
            }

    }


    }

