using AutoMapper;
using DomainLayer.Models.Identity;
using DomainLayer.Models.User;
using Shared.Dto_s.Review;
using Shared.Dtos.Identity;

namespace Shared
{
    public class MappingProfile : Profile
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


            CreateMap<CreateReviewDto, Review>()
               .ForMember(dest => dest.ReviewDate, opt => opt.MapFrom(_ => DateTime.UtcNow))
                 .ForMember(dest => dest.TargetType,
                      opt => opt.MapFrom(src => Enum.Parse<ReviewTargetType>(src.TargetType)))
                 .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.UserId));

            CreateMap<Review, ReviewDto>()
                      .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.User.UserName));
        }
    }
}


