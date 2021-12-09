using Backend.Authorization;
using Backend.BusinessLogic.Enums;
using Backend.BusinessLogic.Managers;
using Backend.DataAccess.DataModels;
using Backend.Models;
using Backend.Models.RequestModels;
using Backend.Models.ViewModels;
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
    public class SchoolsController : ControllerBase
    {
        private readonly IManagerBase<School> _manager;

        public SchoolsController(IManagerBase<School> manager)
        {
            _manager = manager;
        }
        // GET: api/<SchoolsController>
        [HttpGet]
        public IActionResult Get()
        {
            var result = _manager.List<SchoolListViewModel>();
            return Ok(result);
        }

        // GET api/<SchoolsController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var result = _manager.Get<SchoolFullGetViewModel>(id);
            return Ok(result);
        }

        // POST api/<SchoolsController>
        [Authorize(Role.Admin)]
        [HttpPost]
        public IActionResult Post([FromBody] SchoolRequestModel request)
        {
            _manager.Create<SchoolRequestModel>(request);
            return Created("", null);
        }

        // PUT api/<SchoolsController>/5
        [Authorize(Role.Admin)]
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] SchoolRequestModel request)
        {
            _manager.Update(id, request);
            return NoContent();
        }

        // DELETE api/<SchoolsController>/5
        [Authorize(Role.Admin)]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _manager.Delete(id);
            return NoContent();
        }

        [HttpGet("idNameModels")]
        public IActionResult GetIdNameModels()
        {
            var result = _manager.List<IdNameModel>();
            return Ok(result);
        }
    }
}
