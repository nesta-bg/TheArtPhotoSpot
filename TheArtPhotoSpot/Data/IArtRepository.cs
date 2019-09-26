using System.Collections.Generic;
using TheArtPhotoSpot.Data.Entites;

namespace TheArtPhotoSpot.Data
{
    public interface IArtRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);

        IEnumerable<Order> GetAllOrders(bool includeItems);
        Order GetOrderById(int id);

        bool SaveAll();
        void AddEntity(object model);
    }
}