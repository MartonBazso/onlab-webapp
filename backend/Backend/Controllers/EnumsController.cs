using Backend.BusinessLogic;
using Backend.BusinessLogic.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnumsController : ControllerBase
    {
        public EnumsController()
        {

        }

        [HttpGet("categories")]
        public IActionResult GetCategories()
        {
            var response = MyEnumExtensions.GetValuesAsIdNameModels<Category>();
            return Ok(response);
        }
    }
}
