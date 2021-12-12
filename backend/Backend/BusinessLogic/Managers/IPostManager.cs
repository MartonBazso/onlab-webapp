using Backend.DataAccess.DataModels;
using Backend.Models.ViewModels;
using System.Collections.Generic;

namespace Backend.BusinessLogic.Managers
{
    public interface IPostManager : IManagerBase<User>
    {
        List<PostViewModel> ListBySubjectId(int subjectId);
    }
}