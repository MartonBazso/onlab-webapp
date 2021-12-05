
using AutoMapper;
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

            //CreateMap<Part, PartDTO>().ReverseMap();
            //CreateMap<ComplexPart, PartDTO>()
            //    .ForMember(dst => dst.PartType, opt => opt.MapFrom(src => PartType.ComplexPart))
            //    .ReverseMap();
        }
    }
}
