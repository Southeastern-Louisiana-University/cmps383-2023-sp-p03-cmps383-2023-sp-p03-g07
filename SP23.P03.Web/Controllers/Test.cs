using Microsoft.AspNetCore.Mvc;

namespace SP23.P03.Web.Controllers
{
    [ApiController]
    [Route("api/Test")]
    public class Test : ControllerBase
    {
        // This is to test my branch and repo since its buggy right now
        public IActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Login(LoginVM login)
        {

        }
    }
}
