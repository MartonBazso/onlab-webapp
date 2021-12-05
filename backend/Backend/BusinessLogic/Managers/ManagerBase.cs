using AutoMapper;
using Backend.DataAccess.DataModels;
using Backend.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.BusinessLogic.Managers
{
    public abstract class ManagerBase<TModel> : IManagerBase<TModel> where TModel : DbModelBase
    {
        private readonly IRepositoryBase<TModel> _repositoryBase;
        private readonly IMapper _mapper;

        public ManagerBase(IRepositoryBase<TModel> repositoryBase, IMapper mapper)
        {
            _repositoryBase = repositoryBase;
            _mapper = mapper;
        }

        public virtual TResponse Get<TResponse>(int id)
        {
            var subject = _repositoryBase.List().Where(s => s.Id == id).Single();
            return _mapper.Map<TResponse>(subject);
        }

        public virtual void Create<TRequest>(TRequest requestModel)
        {
            var model = _mapper.Map<TModel>(requestModel);
            _repositoryBase.Create(model);
        }

        public virtual void Update<TRequest>(TRequest requestModel)
        {
            var model = _mapper.Map<TModel>(requestModel);
            _repositoryBase.Update(model);
        }

        public virtual void Delete(int id)
        {
            _repositoryBase.Remove(id);
        }

        public virtual List<TResponse> List<TResponse>()
        {
            var result = _repositoryBase.List().ToList();
            return _mapper.Map<List<TResponse>>(result);
        }
    }
}
