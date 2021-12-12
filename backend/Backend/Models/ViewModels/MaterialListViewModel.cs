using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.ViewModels
{
    public class MaterialListViewModel
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public string UploadedByUserName { get; set; }
        public DateTime UploadedAt { get; set; }
    }
}
