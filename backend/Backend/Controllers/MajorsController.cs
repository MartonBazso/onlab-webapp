using Backend.Authorization;
using Backend.BusinessLogic.Enums;
using Backend.BusinessLogic.Managers;
using Backend.DataAccess.DataModels;
using Backend.Models;
using Backend.Models.RequestModels;
using Backend.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MajorsController : ControllerBase
    {
        private readonly IManagerBase<Major> _manager;

        public MajorsController(IManagerBase<Major> managerBase)
        {
            _manager = managerBase;
        }
        // GET: api/<MajorsController>
        [HttpGet]
        public IActionResult Get()
        {
            var result = _manager.List<MajorListViewModel>();
            return Ok(result);
        }

        // GET api/<MajorsController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var result = _manager.Get<MajorFullGetViewModel>(id);
            return Ok(result);
        }

        // POST api/<MajorsController>
        [Authorize(Role.Admin)]
        [HttpPost]
        public IActionResult Post([FromBody] MajorRequestModel request)
        {
            _manager.Create(request);
            return Ok();
        }

        // PUT api/<MajorsController>/5
        [Authorize(Role.Admin)]
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] MajorRequestModel request)
        {
            _manager.Update(id, request);
            return Ok();
        }

        // DELETE api/<MajorsController>/5
        [Authorize(Role.Admin)]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _manager.Delete(id);
            return Ok();
        }

        [HttpGet("idNameModels")]
        public IActionResult GetIdNameModels()
        {
            var result = _manager.List<IdNameModel>();
            return Ok(result);
        }
    }
}
