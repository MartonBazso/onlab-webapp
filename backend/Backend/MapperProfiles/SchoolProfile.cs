using AutoMapper;
using Backend.DataAccess.DataModels;
using Backend.Models.RequestModels;
using Backend.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.MapperProfiles
{
    public class SchoolProfile : Profile
    {
        public SchoolProfile()
        {
            CreateMap<School, SchoolListViewModel>().ReverseMap();
            CreateMap<School, SchoolRequestModel>().ReverseMap();
            CreateMap<School, SchoolFullGetViewModel>().ReverseMap();
        }
    }
}
