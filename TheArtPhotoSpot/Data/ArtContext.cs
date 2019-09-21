using Microsoft.EntityFrameworkCore;
using TheArtPhotoSpot.Data.Entites;

namespace TheArtPhotoSpot.Data
{
    public class ArtContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}
