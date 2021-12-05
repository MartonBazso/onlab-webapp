using Backend.DataAccess.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DataAccess.Repositories
{
    public class RepositoryBase<T> : IRepositoryBase<T> where T : DbModelBase
    {
        private readonly AppDbContext _context;

        public RepositoryBase(AppDbContext context)
        {
            _context = context;
        }

        public void Create(T entity)
        {
            _context.Set<T>().Add(entity);
            _context.SaveChanges();
        }

        public IQueryable<T> List()
        {
            return _context.Set<T>();
        }

        public void Remove(int id)
        {
            var entity = _context.Set<T>().Single(e => e.Id == id);
            _context.Set<T>().Remove(entity);
            _context.SaveChanges();
        }

        public void Update(T model)
        {
            _context.Set<T>().Attach(model);
            _context.Set<T>().Update(model).Property(p => p.Id).IsModified = true;
            _context.SaveChanges();
        }
    }
}
