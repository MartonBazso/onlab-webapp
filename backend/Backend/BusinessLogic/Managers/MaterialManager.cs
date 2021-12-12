using AutoMapper;
using Backend.DataAccess.DataModels;
using Backend.DataAccess.Repositories;
using Backend.Models;
using Backend.Models.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.BusinessLogic.Managers
{
    public class MaterialManager : ManagerBase<Material>, IMaterialManager
    {
        private readonly IRepositoryBase<Material> _repositoryBase;
        private readonly IMapper _mapper;

        public MaterialManager(IRepositoryBase<Material> repositoryBase, IMapper mapper) : base(repositoryBase, mapper)
        {
            _repositoryBase = repositoryBase;
            _mapper = mapper;
        }

        public List<MaterialListViewModel> ListBySubjectId(int subjectId)
        {
            var result = _repositoryBase.List().Where(m => m.SubjectId == subjectId || m.SubjectId == 0).Include(m => m.UploadedBy).ToList();
            return _mapper.Map<List<MaterialListViewModel>>(result);
        }
    }
}
