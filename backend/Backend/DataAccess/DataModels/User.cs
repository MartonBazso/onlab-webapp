using Backend.BusinessLogic.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DataAccess.DataModels
{
    public class User : DbModelBase
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public Role Role { get; set; }
    }
}
