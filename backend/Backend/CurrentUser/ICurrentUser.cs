using Backend.BusinessLogic.Enums;
using Backend.DataAccess.DataModels;

namespace Backend.CurrentUser
{
    public interface ICurrentUser
    {
        int Id { get; set; }
        string UserName { get; set; }
        string FullName { get; set; }
        string Email { get; set; }
        Role Role { get; set; }

        void SetCurrentUser(User user);
    }
}