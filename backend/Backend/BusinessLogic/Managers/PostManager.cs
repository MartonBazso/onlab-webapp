using AutoMapper;
using Backend.DataAccess.DataModels;
using Backend.DataAccess.Repositories;
using Backend.Models.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.BusinessLogic.Managers
{
    public class PostManager : ManagerBase<Post>, IPostManager
    {
        private readonly IRepositoryBase<Post> _repositoryBase;
        private readonly IMapper _mapper;

        public PostManager(IRepositoryBase<Post> repositoryBase, IMapper mapper) : base(repositoryBase, mapper)
        {
            _repositoryBase = repositoryBase;
            _mapper = mapper;
        }

        public List<PostViewModel> ListBySubjectId(int subjectId)
        {
            var result = _repositoryBase
                .List()
                .Where(p => p.SubjectId == subjectId)
                .Include(p => p.PostedBy)
                .OrderByDescending(p => p.PostedAt)
                .ToList();

            return _mapper.Map<List<PostViewModel>>(result);
        }
    }
}
