using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.RequestModels
{
    public class MaterialRequestModel
    {
        [Required]
        public IFormFile File { get; set; }
        [Required]
        public int SubjectId { get; set; }
    }
}
