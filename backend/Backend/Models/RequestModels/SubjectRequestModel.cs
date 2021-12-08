using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.BusinessLogic.Models.RequestModels
{
    public class SubjectRequestModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Difficulty { get; set; }
        public int Rating { get; set; }
        public int Semester { get; set; }
        public bool IsMandatory { get; set; }
        public int MajorId { get; set; }
    }
}
