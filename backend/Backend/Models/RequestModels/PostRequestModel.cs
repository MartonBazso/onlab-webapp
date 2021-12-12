using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.RequestModels
{
    public class PostRequestModel
    {
        [Required]
        public int SubjectId { get; set; }
        [Required]
        public string Content { get; set; }
    }
}
