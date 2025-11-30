
using DomainLayer.Models.Identity;
using DomainLayer.Models.User;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Persistance;
using System.Text;

namespace Travelo_Project
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("BaseConnection"));



            });
            builder.Services.AddAuthentication(
                  cobfig =>
                  {
                      cobfig.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                      cobfig.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

                  }
                  ).AddJwtBearer(
                  options =>
                  {
                      options.TokenValidationParameters = new TokenValidationParameters()
                      {
                          ValidateIssuer = true,
                          ValidIssuer = builder.Configuration.GetSection("JwtOptions")["Issuer"],
                          ValidateAudience = true,
                          ValidAudience = builder.Configuration.GetSection("JwtOptions")["Audience"],
                          ValidateLifetime = true,
                          IssuerSigningKey = new SymmetricSecurityKey((Encoding.UTF8.GetBytes(builder.Configuration.GetSection("JwtOptions")["SecretKey"])))

                      };


                  }
                  );
            builder.Services.AddIdentity<ApplicationUser, ApplicationRole>()
             .AddEntityFrameworkStores<ApplicationDbContext>()
             .AddDefaultTokenProviders();

            var app = builder.Build();

                  // Configure the HTTP request pipeline.
                  if (app.Environment.IsDevelopment())
                  {
                      app.MapOpenApi();
                app.MapOpenApi();
               
            }

                  app.UseHttpsRedirection();

                  app.UseAuthorization();
          
            app.UseRouting();
            app.UseAuthentication();
    


            app.MapControllers();

                  app.Run();
              }
    }
    } 
