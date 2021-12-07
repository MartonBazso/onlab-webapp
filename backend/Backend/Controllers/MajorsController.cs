using Backend.BusinessLogic.Managers;
using Backend.DataAccess.DataModels;
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
        private readonly IManagerBase<Major> _managerBase;

        public MajorsController(IManagerBase<Major> managerBase)
        {
            _managerBase = managerBase;
        }
        // GET: api/<MajorsController>
        [HttpGet]
        public IActionResult Get()
        {
            var result = _managerBase.List<MajorListViewModel>();
            return Ok(result);
        }

        // GET api/<MajorsController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var result = _managerBase.Get<MajorFullGetViewModel>(id);
            return Ok(result);
        }

        // POST api/<MajorsController>
        [HttpPost]
        public IActionResult Post([FromBody] MajorRequestModel request)
        {
            _managerBase.Create(request);
            return Ok();
        }

        // PUT api/<MajorsController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] MajorRequestModel request)
        {
            _managerBase.Update(id, request);
            return Ok();
        }

        // DELETE api/<MajorsController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _managerBase.Delete(id);
            return Ok();
        }
    }
}
