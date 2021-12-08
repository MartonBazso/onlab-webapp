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

            School bme = new School()
            {
                Id = 1,
                City = "Budapest",
                NumberOfStudents = 5000,
                Name = "BME",
                Ranking = 1,
                Majors = new List<Major>(),
                Description = @"Cras dictum sapien a metus varius,
                quis ultricies dui pharetra.Cras feugiat leo et est condimentum,
                vel faucibus nisl luctus.Class aptent taciti sociosqu ad litora torquent per conubia nostra,"
            };

            School corvinus = new School()
            {
                Id = 2,
                City = "Budapest",
                NumberOfStudents = 8000,
                Name = "Corvinus",
                Ranking = 2,
                Majors = new List<Major>(),
                Description = @"Curabitur aliquet luctus justo eu sodales. Nunc mollis pharetra odio. Morbi luctus, nunc eu bibendum porta, massa ex consectetur arcu, ut tincidunt risus nibh ut eros. Curabitur elementum egestas aliquam. Maecenas a diam neque. Morbi blandit, mauris id pretium pharetra, lectus velit tristique lorem, at finibus sem augue a ligula. "
            };

            Major mernoki = new Major
            {
                AverageNumberOfStudents = 500,
                Category = Category.IT,
                Name = "Mérnökinformatika",
                NumberOfSemesters = 7,
                SchoolId = 1,
                WorkChances = 90,
                Rating = 10,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus consectetur dapibus. Aenean iaculis urna elit, vitae consectetur erat convallis sed. Pellentesque sit amet mauris lacinia, scelerisque nulla in, posuere velit. Nam ac sodales augue, a semper eros. Suspendisse eu hendrerit nulla. Vestibulum vitae erat mi. ",
                Subjects = new List<Subject>(),
                Id = 1
            };

            Major gazdinfo = new Major
            {
                AverageNumberOfStudents = 1000,
                Category = Category.IT,
                Name = "Gazdaságinformatikus",
                NumberOfSemesters = 7,
                SchoolId = 2,
                WorkChances = 80,
                Rating = 5,
                Description = "Praesent malesuada eros ac turpis condimentum, sit amet scelerisque turpis laoreet. Quisque faucibus aliquam efficitur. Morbi viverra aliquam semper. Sed cursus rutrum vulputate. Nam bibendum vel augue vel laoreet. Cras volutpat dui erat, ac bibendum turpis volutpat in. Mauris elit ex, feugiat vitae rutrum eu,re velit. Nam ac sodales augue, a semper eros. Suspendisse eu hendrerit nulla. Vestibulum vitae erat mi. ",
                Subjects = new List<Subject>(),
                Id = 2
            };
            context.Schools.Add(bme);
            context.Schools.Add(corvinus);

            context.Majors.Add(mernoki);
            context.Majors.Add(gazdinfo);
            context.SaveChanges();
        }
    }
}
