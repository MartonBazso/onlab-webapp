using Backend.BusinessLogic.Enums;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DataAccess.DataModels
{
    public class User : IdentityUser
    {
        public string FullName { get; set; }
        public int Role { get; set; }
    }
}
