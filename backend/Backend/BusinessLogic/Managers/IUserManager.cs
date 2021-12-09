using Backend.Models.RequestModels;
using Backend.Models.ViewModels;

namespace Backend.BusinessLogic.Managers
{
    public interface IUserManager
    {
        void AddUser(CreateUserRequestModel CreateUserRequestModel);
        UserViewModel GetCurrentUser();
        UserViewModel Login(LoginRequestModel LoginRequestModel);
        void LogOut();
    }
}