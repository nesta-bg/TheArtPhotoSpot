using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TheArtPhotoSpot.Data.Entites;
using TheArtPhotoSpot.Data.Entities;

namespace TheArtPhotoSpot.Data
{
    //after creating a migration Identity drop the db
    public class ArtContext : IdentityDbContext<StoreUser>
    {
        public ArtContext(DbContextOptions<ArtContext> options) : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}
