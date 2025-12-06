using DomainLayer.Models.Hotels___Accommodation;
using DomainLayer.Models.Identity;
using DomainLayer.Models.User;
using Microsoft.AspNetCore.Identity;

namespace Persistance.Identity
{
    public static class IdentityDataSeed
    {
        public static async Task Initialize(

     RoleManager<ApplicationRole> roleManager,
     UserManager<ApplicationUser> userManager,
     ApplicationDbContext db)
        {
            await SeedRoles(roleManager);
            await SeedHotels(db);
            await SeedUsers(userManager, db);
        }

        // Seed Roles
        private static async Task SeedRoles(RoleManager<ApplicationRole> roleManager)
        {
            string[] roles = { "ADMIN", "HOTEL", "TOURIST" };

            foreach (var roleName in roles)
            {
                if (!await roleManager.RoleExistsAsync(roleName))
                {
                    await roleManager.CreateAsync(new ApplicationRole
                    {
                        Name = roleName,
                        NormalizedName = roleName,
                        Description = $"{roleName} default role"
                    });
                }
            }
        }


        // SEED HOTELS
        private static async Task SeedHotels(ApplicationDbContext db)
        {
            if (!db.Hotels.Any())
            {
                db.Hotels.Add(new Hotel
                {
                    Id = 1,
                    Name = "Sunrise Hotel",
                    Address = "Cairo",
                    StarRating = 5
                });

                db.Hotels.Add(new Hotel
                {
                    Id = 2,
                    Name = "Grand Resort",
                    Address = "Hurghada",
                    StarRating = 4
                });

                await db.SaveChangesAsync();
            }
        }
        // Seed User
        private static async Task SeedUsers(UserManager<ApplicationUser> userManager, ApplicationDbContext db)
        {
            // ADMIN USER

            if (await userManager.FindByEmailAsync("admin@system.com") == null)
            {
                var admin = new ApplicationUser
                {
                    UserName = "admin@system.com",
                    Email = "admin@system.com",
                    DisplayName = "System Admin",
                    UserType = "Admin",
                    EmailConfirmed = true
                };

                await userManager.CreateAsync(admin, "Admin@12345");
                await userManager.AddToRoleAsync(admin, "ADMIN");
            }

            // HOTEL USER

            if (await userManager.FindByEmailAsync("hotel@test.com") == null)
            {
                var hotelUser = new HotelUser
                {
                    UserName = "hotel@test.com",
                    Email = "hotel@test.com",
                    DisplayName = "Hotel Manager 1",
                    UserType = "Hotel",
                    HotelId = 1,
                    EmailConfirmed = true
                };

                await userManager.CreateAsync(hotelUser, "Hotel@12345");
                await userManager.AddToRoleAsync(hotelUser, "HOTEL");
            }

            // TOURIST USER

            if (await userManager.FindByEmailAsync("tourist@test.com") == null)
            {
                var tourist = new TouristUser
                {
                    UserName = "tourist@test.com",
                    Email = "tourist@test.com",
                    DisplayName = "Tourist User",
                    UserType = "Tourist",
                    IDNumber = "987654321",
                    EmailConfirmed = true
                };

                await userManager.CreateAsync(tourist, "Tourist@12345");
                await userManager.AddToRoleAsync(tourist, "TOURIST");
            }
        }
    }
}
