using Backend.BusinessLogic;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.RequestModels
{
    public class MajorRequestModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public Category Category { get; set; }
        [Required]
        public int Rating { get; set; }
        [Required]
        public double WorkChances { get; set; }
        [Required]
        public int AverageNumberOfStudents { get; set; }
        [Required]
        public int NumberOfSemesters { get; set; }
        [Required]
        public int SchoolId { get; set; }
    }
}