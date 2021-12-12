using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DataAccess.DataModels
{
    public class Subject : DbModelBase
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Difficulty { get; set; }
        public int Rating { get; set; }
        public int Semester { get; set; }
        public bool IsMandatory { get; set; }
        public int MajorId { get; set; }

        public virtual ICollection<Material> CourseMaterials { get; set; }
        public virtual ICollection<Post> Posts { get; set; }
        public virtual ICollection<Teacher> Teachers { get; set; }
    }
}
