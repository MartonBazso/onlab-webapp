using Backend.BusinessLogic.Enums;

namespace Backend.Models.RequestModels
{
    public class CreateUserRequestModel
    {
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Role Role { get; set; }
    }
}