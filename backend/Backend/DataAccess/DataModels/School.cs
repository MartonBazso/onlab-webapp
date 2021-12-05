using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DataAccess.DataModels
{
    public class School : DbModelBase
    {
        public string Name { get; set; }
        public string City { get; set; }
        public int NumberOfStudents { get; set; }
        public int Ranking { get; set; }

        public virtual ICollection<Major> Majors { get; set; }

    }
}
