using Microsoft.AspNetCore.Mvc;

namespace TheArtPhotoSpot.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
