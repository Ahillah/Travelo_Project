using DomainLayer.Models.Identity;
using DomainLayer.Models.User;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ServiceAbstraction;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ServiceImplementation
{
    public class AuthService : IAuthService
    {
        private readonly IConfiguration _config;

        public AuthService(IConfiguration config)
        {
            _config = config;
        }

        public async Task<string> CreateTokenAsync(ApplicationUser user, UserManager<ApplicationUser> userManager, string role)
        {
            // Custom Claims
            var authClaim = new List<Claim>()
        {
            new Claim(ClaimTypes.Name, user.DisplayName ?? ""),
            new Claim(ClaimTypes.Email, user.Email ?? ""),
            new Claim(ClaimTypes.Role, role),
            new Claim("UserType", user.UserType ?? "") 
        };

        

            // Security Key (Fix Typo: AuhKey → AuthKey)
            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_config["jwt:AuthKey"]!)
            );

            // Create token
            var token = new JwtSecurityToken(
                issuer: _config["jwt:AuthIssuer"],
                audience: _config["jwt:AuthAudience"],
                expires: DateTime.Now.AddDays(double.Parse(_config["jwt:AuthExpire"] ?? "1")),
                claims: authClaim,
                signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }


}

