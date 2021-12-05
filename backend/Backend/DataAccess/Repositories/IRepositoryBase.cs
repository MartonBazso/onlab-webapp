using Backend.DataAccess.DataModels;
using System.Linq;

namespace Backend.DataAccess.Repositories
{
    public interface IRepositoryBase<T> where T : DbModelBase
    {
        IQueryable<T> List();
        void Create(T entity);
        void Update(T entity);
        void Remove(int id);
    }
}