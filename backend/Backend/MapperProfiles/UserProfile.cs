using AutoMapper;
using Backend.CurrentUser;
using Backend.DataAccess.DataModels;
using Backend.Models;
using Backend.Models.RequestModels;
using Backend.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Backend.MapperProfiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserViewModel>().ReverseMap();
            CreateMap<User, CreateUserRequestModel>().ReverseMap();
            CreateMap<ClaimsPrincipal, User>().ReverseMap();
        }
    }
}
