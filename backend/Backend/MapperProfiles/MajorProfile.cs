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
    public class MajorProfile : Profile
    {
        public MajorProfile()
        {
            CreateMap<Major, MajorFullGetViewModel>().ReverseMap();
            CreateMap<Major, MajorListViewModel>().ReverseMap();
            CreateMap<Major, MajorRequestModel>().ReverseMap();
        }
    }
}
