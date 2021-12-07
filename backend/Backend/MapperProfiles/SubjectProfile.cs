
using AutoMapper;
using Backend.BusinessLogic.Models.RequestModels;
using Backend.BusinessLogic.Models.ViewModels;
using Backend.DataAccess.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.MapperProfiles
{
    public class SubjectProfile : Profile
    {
        public SubjectProfile()
        {
            CreateMap<Subject, SubjectListViewModel>().ReverseMap();
            CreateMap<Subject, SubjectRequestModel>().ReverseMap();
            CreateMap<Subject, SubjectFullGetViewModel>().ReverseMap();
        }
    }
}
