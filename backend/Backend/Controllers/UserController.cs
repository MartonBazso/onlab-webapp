using Backend.BusinessLogic.Managers;
using Backend.Models.RequestModels;
using Backend.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserManager _userService;

        public UserController(IUserManager userService)
        {
            _userService = userService;
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] CreateUserRequestModel CreateUserRequestModel)
        {
            _userService.AddUser(CreateUserRequestModel);
        }

        [HttpPost("login")]
        public ActionResult<UserViewModel> Login(LoginRequestModel LoginRequestModel)
        {
            var loggedInUser = _userService.Login(LoginRequestModel);
            if (loggedInUser == null)
            {
                return Unauthorized();
            }
            return Ok(loggedInUser);
        }

        [HttpGet("currentUser")]
        public ActionResult<UserViewModel> GetCurrentUser()
        {
            return _userService.GetCurrentUser();
        }

        [HttpPut("logout")]
        public IActionResult LogOut()
        {
            _userService.LogOut();
            return Ok();
        }

    }
}
