using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.BusinessLogic
{
    public enum Category
    {
        [Description("IT")]
        IT = 1,
        [Description("Gazdaság")]
        Business = 2,
        [Description("Egészségügyi")]
        Medical = 3,
        [Description("Mérnöki")]
        Engineering = 4,
        [Description("Művészeti")]
        Art = 5
    }
}
