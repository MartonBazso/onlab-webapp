using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DataAccess.Repositories
{
    public class SubjectRepository : ISubjectRepository
    {
        private readonly AppDbContext _appDbContext;
        public SubjectRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
    }
}
