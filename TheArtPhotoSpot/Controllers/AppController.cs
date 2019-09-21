using Microsoft.AspNetCore.Mvc;
using System.Linq;
using TheArtPhotoSpot.Data;
using TheArtPhotoSpot.ViewModels;

namespace TheArtPhotoSpot.Controllers
{
    public class AppController : Controller
    {
        private readonly ArtContext _context;

        public AppController(ArtContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                //Send the email
            }
            else
            {
                //Show the errors
            }

            return View();
        }

        public IActionResult About()
        {
            ViewBag.Title = "About Us";

            return View();
        }

        public IActionResult Shop()
        {
            //LINQ Query
            //var results = from p in _context.Products
            //              orderby p.Category
            //              select p;

            //return View(results.ToList());


            var results = _context.Products
                .OrderBy(p => p.Category)
                .ToList();

            return View(results);
        }
    }
}
