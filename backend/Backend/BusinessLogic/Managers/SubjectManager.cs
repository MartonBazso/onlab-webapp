using AutoMapper;
using Backend.BusinessLogic.Models.RequestModels;
using Backend.BusinessLogic.Models.ViewModels;
using Backend.DataAccess.DataModels;
using Backend.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.BusinessLogic.Managers
{
    public class SubjectManager : ManagerBase<Subject>, ISubjectManager
    {
        public SubjectManager(IRepositoryBase<Subject> repositoryBase, IMapper mapper) : base(repositoryBase, mapper)
        {
        }
    }
}
