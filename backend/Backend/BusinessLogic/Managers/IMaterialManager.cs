using Backend.DataAccess.DataModels;
using Backend.Models;
using Backend.Models.ViewModels;
using System.Collections.Generic;

namespace Backend.BusinessLogic.Managers
{
    public interface IMaterialManager : IManagerBase<Material>
    {
        List<MaterialListViewModel> ListBySubjectId(int subjectId);
    }
}