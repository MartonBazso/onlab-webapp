using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DataAccess.DataModels
{
    public class Post : DbModelBase
    {
        public string Content { get; set; }
        public string PostedById { get; set; }
        public DateTime PostedAt { get; set; }
        public int SubjectId { get; set; }

        public virtual Subject Subject { get; set; }
        public virtual User PostedBy { get; set; }
    }
}
