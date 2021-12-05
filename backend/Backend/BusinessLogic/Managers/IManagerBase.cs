using System.Collections.Generic;

namespace Backend.BusinessLogic.Managers
{
    public interface IManagerBase<T>
    {
        void Create<TRequest>(TRequest requestModel);
        void Delete(int id);
        TResponse Get<TResponse>(int id);
        List<TResponse> List<TResponse>();
        void Update<TRequest>(TRequest requestModel);
    }
}