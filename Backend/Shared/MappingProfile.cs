using AutoMapper;
using DomainLayer.Models.Identity;
using Shared.Dtos.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared
{
    public class MappingProfile :Profile
    {
        public MappingProfile()
        {
            // Tourist
            CreateMap<TouristRegisterDto, TouristUser>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email));

            // Hotel Admin
            CreateMap<HotelRegisterDto, HotelUser>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.AdminEmail))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.AdminEmail));
        }
    }
}
