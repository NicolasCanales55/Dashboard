using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        [HttpGet("ventas")]
        public IActionResult GetVentas()
        {
            var data = new[]
            {
                new { month = "Ene", ventas = 4000},
                new { month = "Feb", ventas = 4400},
                new { month = "Mar", ventas = 3900},
                new { month = "Abr", ventas = 4200},
                new { month = "May", ventas = 3700},
                new { month = "Jun", ventas = 8000},
            };
            return Ok(data);
        }
    }
}