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
        public string Description { get; set; }
        public int MajorId { get; set; }
        public bool IsMandatory { get; set; }
    }
}
