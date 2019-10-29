using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TheArtPhotoSpot.Data;
using TheArtPhotoSpot.Services;
using TheArtPhotoSpot.ViewModels;

namespace TheArtPhotoSpot.Controllers
{
    public class AppController : Controller
    {
        private readonly IArtRepository _repository;
        private readonly IMailService _mailService;

        public AppController(IArtRepository repository, IMailService mailService)
        {
            _repository = repository;
            _mailService = mailService;
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
                //Chect ASP.NET Core Web Server in Output Window
                //Send the email
                _mailService.SendMessage("nenads368@gmail.com", model.Subject, $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
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
            return View();
        }
    }
}
