using System.Collections.Generic;

namespace Backend.DataAccess.DataModels
{
    public class Teacher : DbModelBase
    {
        public string Name { get; set; }
        public ICollection<Subject> Subjects { get; set; }
        public ICollection<School> Schools { get; set; }
    }
}