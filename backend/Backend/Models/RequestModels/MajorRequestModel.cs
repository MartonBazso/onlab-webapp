using Backend.BusinessLogic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.RequestModels
{
    public class MajorRequestModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public Category Category { get; set; }
        public int Rating { get; set; }
        public double WorkChances { get; set; }
        public int AverageNumberOfStudents { get; set; }
        public int NumberOfSemesters { get; set; }
        public int SchoolId { get; set; }
    }
}
