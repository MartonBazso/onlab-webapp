using Backend.BusinessLogic.Extensions;
using Backend.BusinessLogic.Managers;
using Backend.DataAccess.DataModels;
using Backend.Models;
using Backend.Models.RequestModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaterialsController : ControllerBase
    {
        private readonly IMaterialManager _manager;
        private readonly UserManager<User> _userManager;

        public MaterialsController(IMaterialManager manager, UserManager<User> userManager)
        {
            _manager = manager;
            _userManager = userManager;
        }

        [Authorize]
        [HttpPost("upload")]
        public async Task<IActionResult> UploadMaterial([FromForm] MaterialRequestModel request)
        {
            var emailAddress = HttpContext.User.FindFirstValue("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress");
            var user = await _userManager.FindByEmailAsync(emailAddress);

            var material = new Material
            {
                Extension = request.File.ContentType,
                FileName = request.File.FileName,
                UploadedAt = DateTime.Now,
                UploadedById = user.Id,
                SubjectId = request.SubjectId,
                Content = request.File.GetBytes(),
            };
            _manager.Create(material);

            return Ok();
        }

        [Authorize]
        [HttpGet("getAll/{subjectId}")]
        public IActionResult GetAllFilesBySubjectId(int subjectId)
        {
            var result = _manager.ListBySubjectId(subjectId);

            return Ok(result);
        }

        [Authorize]
        [HttpGet("{id}")]
        public IActionResult GetFile(int id)
        {
            var result = _manager.Get<Material>(id);
            return File(result.Content, result.Extension, result.FileName);
        }
    }
}
