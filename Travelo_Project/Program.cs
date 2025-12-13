
using DomainLayer.Models.Identity;
using DomainLayer.Models.User;
using DomainLayer.RepositoryInterface;
using DomainLayer.RepositoryInterface.Tours;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Persistance;
using Persistance.DataSeed;
using Persistance.RepositoryImplementation.Tours;
using ServiceAbstraction.Tour;
using ServiceImplementation.MappingProfile;
using ServiceImplementation.Tour;
using System.Text;
using Microsoft.OpenApi.Models;
using AutoMapper;


namespace Travelo_Project
{
    
        public class Program
        {
            public static void Main(string[] args)
            {
                var builder = WebApplication.CreateBuilder(args);

                // Add services
                builder.Services.AddScoped<ITourRepository, TourRepository>();
                builder.Services.AddScoped<ITourService, TourService>();
                builder.Services.AddAutoMapper(typeof(TourProfile));

            builder.Services.AddControllers();
                builder.Services.AddOpenApi();

                builder.Services.AddDbContext<ApplicationDbContext>(options =>
                {
                    options.UseSqlServer(builder.Configuration.GetConnectionString("BaseConnection"));
                });

                builder.Services.AddScoped<IDataSeeding, DataSeeder>();

                builder.Services.AddAuthentication(config =>
                {
                    config.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    config.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidateIssuer = true,
                        ValidIssuer = builder.Configuration.GetSection("JwtOptions")["Issuer"],
                        ValidateAudience = true,
                        ValidAudience = builder.Configuration.GetSection("JwtOptions")["Audience"],
                        ValidateLifetime = true,
                        IssuerSigningKey = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes(builder.Configuration.GetSection("JwtOptions")["SecretKey"]))
                    };
                });

                builder.Services.AddEndpointsApiExplorer();
                builder.Services.AddSwaggerGen(c =>
                {
                    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Travelo API", Version = "v1" });
                });

                builder.Services.AddIdentity<ApplicationUser, ApplicationRole>()
                    .AddEntityFrameworkStores<ApplicationDbContext>()
                    .AddDefaultTokenProviders();

                var app = builder.Build();

                // Run data seed
                using var scope = app.Services.CreateScope();
                var seeder = scope.ServiceProvider.GetRequiredService<IDataSeeding>();
                seeder.DataSeed();

                // Swagger (يشتغل في كل البيئات)
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Travelo API v1");
                    c.RoutePrefix = string.Empty;
                });

                // Pipeline
                app.UseHttpsRedirection();

                app.UseRouting();

                app.UseAuthentication();
                app.UseAuthorization();

                app.MapControllers();

                app.Run();
            }
        }
    }
  
