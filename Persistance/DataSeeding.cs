using DomainLayer.Models.Identity;
using DomainLayer.RepositoryInterface;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using DomainLayer.Models.Tours;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Persistance
{
    public class DataSeeding(ApplicationDbContext _dbContext) : IDataSeeding
        //,UserManager<ApplicationUser> _userManager,
        //RoleManager<IdentityRole> _roleManager/*, StoreIdentityDbContext _identityDbContext*/) : IDataSeeding
    {
        public void DataSeed()
        {
            try
            {
                if (_dbContext.Database.GetPendingMigrations().Any())
                {
                    _dbContext.Database.Migrate();
                }

                //// 1. Tour Data Seed
                string jsonFilePath = @"D:\Basma\Back end\Asp.net\API 08\Travelo_Project-master\Travelo_Project-master\Backend\Persistance\Data\Tour.json";
                string jsonData = File.ReadAllText(jsonFilePath);
                var toursFromJson = JsonSerializer.Deserialize<List<Tour>>(jsonData, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                if (toursFromJson != null && toursFromJson.Any())
                {
                    foreach (var t in toursFromJson)
                    {
                        var tour = new Tour
                        {
                            Title = t.Title ?? "No Title",
                            Description = t.Description ?? "",
                            ImageUrl = t.ImageUrl ?? "",
                            DurationInDays = t.DurationInDays,
                            BasePrice = t.BasePrice,
                            DifficultyLevel = t.DifficultyLevel ?? "",
                            MinGroupSize = t.MinGroupSize,
                            MaxGroupSize = t.MaxGroupSize
                        };
                        _dbContext.Tours.Add(tour);
                    }
                    _dbContext.SaveChanges();
                }

                ////2.Destinations
                string destinationsJsonPath = @"D:\Basma\Back end\Asp.net\API 08\Travelo_Project-master\Travelo_Project-master\Backend\Persistance\Data\destinations.json";
                string destinationsJsonData = File.ReadAllText(destinationsJsonPath);
                var destinationsFromJson = JsonSerializer.Deserialize<List<Destination>>(destinationsJsonData, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                if (destinationsFromJson != null && destinationsFromJson.Any())
                {
                    foreach (var d in destinationsFromJson)
                    {
                        var dest = new Destination
                        {
                            Name = d.Name ?? "No Name",
                            Country = d.Country ?? ""
                        };
                        _dbContext.Destinations.Add(dest);
                    }
                    _dbContext.SaveChanges();
                }

                ////3.TourDates
                string tourDatesJsonPath = @"D:\Basma\Back end\Asp.net\API 08\Travelo_Project-master\Travelo_Project-master\Backend\Persistance\Data\tourDates.json";
                string tourDatesJsonData = File.ReadAllText(tourDatesJsonPath);
                var tourDatesFromJson = JsonSerializer.Deserialize<List<TourDate>>(tourDatesJsonData, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                if (tourDatesFromJson != null && tourDatesFromJson.Any())
                {
                    foreach (var td in tourDatesFromJson)
                    {
                        var tourDate = new TourDate
                        {
                            TourId = td.TourId,
                            StartDate = td.StartDate,
                            Price = td.Price,
                            AvailableSeats = td.AvailableSeats
                        };
                        _dbContext.TourDates.Add(tourDate);
                    }
                    _dbContext.SaveChanges();
                }

                //// 4. TourDestinations
                string tourDestJsonPath = @"D:\Basma\Back end\Asp.net\API 08\Travelo_Project-master\Travelo_Project-master\Backend\Persistance\Data\tourDestinations.json";
                string tourDestJsonData = File.ReadAllText(tourDestJsonPath);
                var tourDestFromJson = JsonSerializer.Deserialize<List<TourDestination>>(tourDestJsonData, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                if (tourDestFromJson != null && tourDestFromJson.Any())
                {
                    foreach (var td in tourDestFromJson)
                    {
                        var tourDest = new TourDestination
                        {
                            TourId = td.TourId,
                            DestinationId = td.DestinationId
                        };
                        _dbContext.TourDestinations.Add(tourDest);
                    }
                    _dbContext.SaveChanges();
                }

                //// 5. TourInclusions
                string tourInclusionsJsonPath = @"D:\Basma\Back end\Asp.net\API 08\Travelo_Project-master\Travelo_Project-master\Backend\Persistance\Data\inclusions.json";
                string tourInclusionsJsonData = File.ReadAllText(tourInclusionsJsonPath);
                var tourInclusionsFromJson = JsonSerializer.Deserialize<List<TourInclusion>>(tourInclusionsJsonData, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                if (tourInclusionsFromJson != null && tourInclusionsFromJson.Any())
                {
                    foreach (var ti in tourInclusionsFromJson)
                    {
                        var inclusion = new TourInclusion
                        {
                            TourId = ti.TourId,
                            InclusionDetails = ti.InclusionDetails ?? ""
                        };
                        _dbContext.TourInclusions.Add(inclusion);
                    }
                    _dbContext.SaveChanges();
                }

                //6.TourItineraries
                string tourItineraryJsonPath = @"D:\Basma\Back end\Asp.net\API 08\Travelo_Project-master\Travelo_Project-master\Backend\Persistance\Data\itineraries.json";
                string tourItineraryJsonData = File.ReadAllText(tourItineraryJsonPath);
                var tourItineraryFromJson = JsonSerializer.Deserialize<List<TourItinerary>>(tourItineraryJsonData, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                if (tourItineraryFromJson != null && tourItineraryFromJson.Any())
                {
                    foreach (var ti in tourItineraryFromJson)
                    {
                        var itinerary = new TourItinerary
                        {
                            TourId = ti.TourId,
                            DayNumber = ti.DayNumber,
                            DayTitle = ti.DayTitle ?? "",
                            Activities = ti.Activities ?? ""
                        };
                        _dbContext.TourItineraries.Add(itinerary);
                    }
                    _dbContext.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                //TODO
            }

        }

    }
}
