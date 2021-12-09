using Backend.CurrentUser;
using AutoMapper;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Linq;
using System.Security.Cryptography;
using Backend.DataAccess;
using Backend.DataAccess.DataModels;
using Backend.Models.ViewModels;
using Backend.Models.RequestModels;

namespace Backend.BusinessLogic.Managers
{
    public class UserManager : IUserManager
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;
        private readonly ICurrentUser _currentUser;

        public UserManager(AppDbContext context, IMapper mapper, ICurrentUser currentUser)
        {
            _context = context;
            _mapper = mapper;
            _currentUser = currentUser;
        }

        public UserViewModel GetCurrentUser()
        {
            if (_currentUser.Id == 0)
            {
                return null;
            }

            return _mapper.Map<UserViewModel>(_currentUser);
        }

        public void AddUser(CreateUserRequestModel CreateUserRequestModel)
        {
            var user = _mapper.Map<User>(CreateUserRequestModel);
            if (_context.Users.SingleOrDefault(u => u.Email == user.Email) != null)
            {
                throw new Exception("User with this name already exists!");
            }

            var salt = new byte[128 / 8];
            // generate a 128-bit salt using a cryptographically strong random sequence of nonzero values
            using (var rngCsp = new RNGCryptoServiceProvider())
            {
                rngCsp.GetNonZeroBytes(salt);
            }
            user.Password = EncryptPassword(user.Password, salt);
            user.Salt = salt;

            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public UserViewModel Login(LoginRequestModel LoginRequestModel)
        {
            var user = _context.Users.SingleOrDefault(u => u.Email == LoginRequestModel.Email);
            if (user == null)
            {
                throw new UnauthorizedAccessException("Nincs ilyen emailcím!");
            }

            if (user.Password != EncryptPassword(LoginRequestModel.Password, user.Salt))
            {
                throw new UnauthorizedAccessException("Rossz jelszó!");
            }

            _currentUser.SetCurrentUser(user);
            return _mapper.Map<UserViewModel>(user);
        }

        public void LogOut()
        {
            _currentUser.SetCurrentUser(new User());
        }

        private string EncryptPassword(string password, byte[] salt)
        {
            // derive a 256-bit subkey (use HMACSHA256 with 100,000 iterations)
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 100000,
                numBytesRequested: 256 / 8));

            return hashed;
        }
    }
}
