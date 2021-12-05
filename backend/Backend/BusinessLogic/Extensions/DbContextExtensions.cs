using Backend.DataAccess;
using Backend.DataAccess.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.BusinessLogic.Extensions
{
    public static class DbContextExtensions
    {
        public static void SetupFakeData(this AppDbContext context)
        {

            School school = new School()
            {
                Id = 1,
                City = "Budapest",
                NumberOfStudents = 5000,
                Name = "BME",
                Ranking = 1,
                Majors = new List<Major>()
            };

            context.Schools.Add(school);
        }
    }
}
