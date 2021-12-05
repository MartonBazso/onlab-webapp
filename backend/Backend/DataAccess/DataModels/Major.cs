using Backend.BusinessLogic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DataAccess.DataModels
{
    public class Major : DbModelBase
    {
        public string Name { get; set; }
        public Category Category { get; set; }
        public int Rating { get; set; }
        public double WorkChances { get; set; }
        public int AverageNumberOfStudents { get; set; }
        public int NumberOfSemesters { get; set; }
        public int SchoolId { get; set; }
        public virtual ICollection<Subject> Subjects { get; set; }
    }
}
