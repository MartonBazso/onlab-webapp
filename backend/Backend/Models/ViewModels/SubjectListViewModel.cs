using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.BusinessLogic.Models.ViewModels
{
    public class SubjectListViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Difficulty { get; set; }
        public int Rating { get; set; }
        public int Semester { get; set; }
        public bool IsMandatory { get; set; }
    }
}
