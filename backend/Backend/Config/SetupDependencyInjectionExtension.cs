using Backend.BusinessLogic.Managers;
using Backend.CurrentUser;
using Backend.DataAccess.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Config
{
    public static class SetupDependencyInjectionExtension
    {
        public static void SetupDependencyInjection(this IServiceCollection services)
        {
            services.AddScoped<ISubjectManager, SubjectManager>();
            services.AddScoped<ISubjectRepository, SubjectRepository>();
            services.AddScoped(typeof(IRepositoryBase<>), typeof(RepositoryBase<>));
            services.AddScoped(typeof(IManagerBase<>), typeof(ManagerBase<>));
            services.AddScoped<IMaterialManager, MaterialManager>();
            services.AddScoped<IPostManager, PostManager>();
        }
    }
}
