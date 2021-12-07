using Backend.MapperProfiles;
using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Config
{
    public static class SetupAutoMapperExtension
    {

        public static void SetupAutoMapper(this IServiceCollection services)
        {
            var configuration = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<SubjectProfile>();
                cfg.AddProfile<SchoolProfile>();
                cfg.AddProfile<MajorProfile>();
                cfg.AddProfile<UserProfile>();
            });

            //Setup AutoMapper
            IMapper mapper = configuration.CreateMapper();
            services.AddSingleton(mapper);
        }
    }
}
