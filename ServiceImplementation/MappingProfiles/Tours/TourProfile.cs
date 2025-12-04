using AutoMapper;
using DomainLayer.Models.Tours;
using Shared.Dto_s.Tour.Tours;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceImplementation.MappingProfiles.Tours
{
    public class TourProfile : Profile
    {
        public TourProfile()
        {
            CreateMap<Tour, TourDto>()
               .ForMember(dest => dest.Destinations,
                          opt => opt.MapFrom(src => src.TourDestinations.Select(d => d.Destination)));

            CreateMap<CreateTourDto, Tour>();
            CreateMap<UpdateTourDto, Tour>();
        }
    }
}
