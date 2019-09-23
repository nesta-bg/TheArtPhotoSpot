﻿using System.Collections.Generic;
using System.Linq;
using TheArtPhotoSpot.Data.Entites;

namespace TheArtPhotoSpot.Data
{
    public class ArtRepository : IArtRepository
    {
        private readonly ArtContext _context;

        public ArtRepository(ArtContext context)
        {
            _context = context;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return _context.Products
                .OrderBy(p => p.Title)
                .ToList();
        }

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            return _context.Products
                .Where(p => p.Category == category)
                .ToList();
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
