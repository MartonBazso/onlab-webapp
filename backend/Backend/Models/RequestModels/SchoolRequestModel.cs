using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Backend.Models.RequestModels
{
    
    public class SchoolRequestModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string City { get; set; }
        public int NumberOfStudents { get; set; }
    }
}
