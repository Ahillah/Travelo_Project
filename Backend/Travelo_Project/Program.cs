using DomainLayer.Models.Identity;
using DomainLayer.Models.User;
using DomainLayer.RepositoryInterface;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Persistance;
using Persistance.Identity;
using Persistance.RepositoryImplemention;
using presentation.Controllers;
using ServiceAbstraction;
using ServiceImplementation;
using Shared;
using System.Text;



namespace Travelo_Project
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.



            builder.Services.AddControllers()
              .AddApplicationPart(typeof(AuthController).Assembly)
              .AddApplicationPart(typeof(PaymentController).Assembly)
              .AddApplicationPart(typeof(ReviewController).Assembly);

            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("BaseConnection"));



            });




            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidIssuer = builder.Configuration["JwtOptions:Issuer"],

                    ValidateAudience = true,
                    ValidAudience = builder.Configuration["JwtOptions:Audience"],

                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,

                    IssuerSigningKey = new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(builder.Configuration["JwtOptions:Key"])
                    )
                };
            });


            builder.Services.AddAutoMapper(typeof(MappingProfile));
            builder.Services.AddScoped<IAuthService, AuthService>();
            builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            builder.Services.AddScoped(typeof(IPaymentService), typeof(PaymentService));
            builder.Services.AddScoped(typeof(IReviewServices), typeof(ReviewServices));


            builder.Services.AddIdentity<ApplicationUser, ApplicationRole>()
             .AddEntityFrameworkStores<ApplicationDbContext>()
             .AddDefaultTokenProviders();





            var app = builder.Build();

            using (var scope = app.Services.CreateScope())
            {
                var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<ApplicationRole>>();
                var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
                var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();




                await IdentityDataSeed.Initialize(roleManager, userManager, db);
            }



            // Configure the HTTP request pipeline. 

            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
                app.MapOpenApi();

            }


            app.UseHttpsRedirection();

          

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();



            app.MapControllers();


            app.Run();
        }
    }
}
