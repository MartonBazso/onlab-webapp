using AutoMapper;
using Backend.BusinessLogic.Enums;
using Backend.DataAccess.DataModels;

namespace Backend.CurrentUser
{
    public class CurrentUser : ICurrentUser
    {
        private readonly IMapper _mapper;

        public CurrentUser(IMapper mapper)
        {
            _mapper = mapper;
        }
        public int Id { get; set; }
        public string UserName { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public Role Role { get; set; }

        public void SetCurrentUser(User user)
        {
            _mapper.Map(user, this);
        }
    }
}
