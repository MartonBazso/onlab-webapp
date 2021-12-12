using Backend.BusinessLogic.Enums;
using Backend.BusinessLogic.Managers;
using Backend.BusinessLogic.Models.RequestModels;
using Backend.BusinessLogic.Models.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubjectsController : ControllerBase
    {
        private readonly ISubjectManager _subjectManager;

        public SubjectsController(ISubjectManager subjectManager)
        {
            _subjectManager = subjectManager;
        }

        // GET: api/<SubjectController>
        [HttpGet]
        public IActionResult Get()
        {
            var result = _subjectManager.List<SubjectListViewModel>();
            return Ok(result);
        }

        // GET api/<SubjectController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var result = _subjectManager.Get<SubjectFullGetViewModel>(id);
            return Ok(result);
        }

        // POST api/<SubjectController>
        [HttpPost]
        [Authorize]
        public IActionResult Post([FromBody] SubjectRequestModel request)
        {
            _subjectManager.Create(request);
            return Created("", null);
        }

        // PUT api/<SubjectController>/5
        [Authorize]
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] SubjectRequestModel request)
        {
            _subjectManager.Update(id, request);
            return NoContent();
        }

        // DELETE api/<SubjectController>/5
        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _subjectManager.Delete(id);
            return NoContent();
        }
    }
}
