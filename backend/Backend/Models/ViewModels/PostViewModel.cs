using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.ViewModels
{
    public class PostViewModel
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public UserViewModel PostedBy { get; set; }
        public DateTime PostedAt { get; set; }
    }
}
