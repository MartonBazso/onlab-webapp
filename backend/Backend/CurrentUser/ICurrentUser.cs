using Backend.BusinessLogic.Enums;
using Backend.DataAccess.DataModels;

namespace Backend.CurrentUser
{
    public interface ICurrentUser
    {
        int Id { get; set; }
        string Name { get; set; }
        string Email { get; set; }
        Role UserRole { get; set; }

        void SetCurrentUser(User user);
    }
}