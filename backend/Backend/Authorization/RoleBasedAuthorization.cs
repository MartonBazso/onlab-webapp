using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using Backend.CurrentUser;
using Microsoft.Extensions.DependencyInjection;
using Backend.BusinessLogic.Enums;

namespace Backend.Authorization
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class AuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        private readonly IEnumerable<Role> UserRoles;

        public AuthorizeAttribute(params Role[] roles)
        {
            UserRoles = roles;
        }
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var _currentUser = context.HttpContext.RequestServices.GetService<ICurrentUser>();
            if (_currentUser.Id == 0 || (UserRoles.Any() && !UserRoles.Where(r => r == _currentUser.Role).Any()))
            {
                context.Result = new UnauthorizedResult();
            }
        }
    }
}
