using Backend.BusinessLogic.Enums;
using Backend.BusinessLogic.Managers;
using Backend.DataAccess.DataModels;
using Backend.Models.RequestModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostManager _manager;
        private readonly UserManager<User> _userManager;

        public PostsController(IPostManager manager, UserManager<User> userManager)
        {
            _manager = manager;
            _userManager = userManager;
        }

        [AllowAnonymous]
        [HttpGet("listBySubject/{subjectId}")]
        public IActionResult List(int subjectId)
        {
            var result = _manager.ListBySubjectId(subjectId);
            return Ok(result);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Create(PostRequestModel request)
        {
            var emailAddress = HttpContext.User.FindFirstValue("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress");
            var user = await _userManager.FindByEmailAsync(emailAddress);

            var post = new Post
            {
                Content = request.Content,
                SubjectId = request.SubjectId,
                PostedAt = DateTime.Now,
                PostedById = user.Id
            };

            _manager.Create(post);
            return Ok();
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var post = _manager.Get<Post>(id);
            var emailAddress = HttpContext.User.FindFirstValue("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress");
            var user = await _userManager.FindByEmailAsync(emailAddress);

            if (user.Role == (int)Role.Admin || user.Role == (int)Role.Moderator || post.PostedById == user.Id)
            {
                _manager.Delete(id);
                return NoContent();
            }
            return Unauthorized();
        }
    }
}
