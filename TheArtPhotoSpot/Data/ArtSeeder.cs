using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TheArtPhotoSpot.Data.Entites;
using TheArtPhotoSpot.Data.Entities;

namespace TheArtPhotoSpot.Data
{
    public class ArtSeeder
    {
        private readonly ArtContext _context;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<StoreUser> _userManager;

        public ArtSeeder(
            ArtContext context,
            IHostingEnvironment hosting,
            UserManager<StoreUser> userManager)
        {
            _context = context;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task Seed()
        {
            _context.Database.EnsureCreated();

            var user = await _userManager.FindByEmailAsync("nenad@theartphotospot.com");

            if (user == null)
            {
                user = new StoreUser()
                {
                    FirstName = "Nenad",
                    LastName = "Stojkovic",
                    UserName = "nenad@theartphotospot.com",
                    Email = "nenad@theartphotospot.com"
                };

                var result = await _userManager.CreateAsync(user, "P@ssw0rd!");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Failed to create default user");
                }
            }

            if (!_context.Products.Any())
            {
                // Need to create sample data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/art.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);

                _context.Products.AddRange(products);

                var order = new Order()
                {
                    OrderDate = DateTime.Now,
                    OrderNumber = "12345",
                    User = user,
                    Items = new List<OrderItem>()
                    {
                        new OrderItem()
                        {
                            Product = products.First(),
                            Quantity = 5,
                            UnitPrice = products.First().Price
                        }
                    }
                };

                _context.Orders.Add(order);

                _context.SaveChanges();
            }
        }
    }
}
