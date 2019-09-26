using AutoMapper;
using TheArtPhotoSpot.Data.Entites;
using TheArtPhotoSpot.ViewModels;

namespace TheArtPhotoSpot.Data
{
    public class ArtMappingProfile : Profile
    {
        public ArtMappingProfile()
        {
            CreateMap<Order, OrderViewModel>()
                .ForMember(o => o.OrderId, ex => ex.MapFrom(o => o.Id))
                .ReverseMap();

            CreateMap<OrderItem, OrderItemViewModel>()
                .ReverseMap();
        }
    }
}
