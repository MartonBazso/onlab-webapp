using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.BusinessLogic.Models.RequestModels
{
    public class SubjectRequestModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Difficulty { get; set; }
        [Required]
        public int Rating { get; set; }
        [Required]
        public int Semester { get; set; }
        [Required]
        public bool IsMandatory { get; set; }
        [Required]
        public int MajorId { get; set; }
    }
}
