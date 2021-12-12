using AutoMapper;
using Backend.DataAccess.DataModels;
using Backend.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.MapperProfiles
{
    public class MaterialProfile : Profile
    {
        public MaterialProfile()
        {
            CreateMap<Material, MaterialListViewModel>()
                .ForMember(dst => dst.UploadedByUserName, opt => opt.MapFrom(src => src.UploadedBy.UserName));
        }
    }
}
