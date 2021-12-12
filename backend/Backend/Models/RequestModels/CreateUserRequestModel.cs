using Backend.BusinessLogic.Enums;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models.RequestModels
{
    public class CreateUserRequestModel
    {
        [Required]
        [MinLength(5)]
        public string FullName { get; set; }
        [Required]
        [MinLength(5)]
        public string UserName { get; set; }
        [Required]
        [MinLength(5)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(8)]
        public string Password { get; set; }
        public Role Role { get; set; }
    }
}