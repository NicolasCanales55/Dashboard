using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientesController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var clientes = new[]
            {
                new
                {
                    nombre = "Nicolás Canales",
                    email = "nico@correo.cl",
                    telefono = "+56 9 1234 5678",
                    estado = "Activo"
                },
                new
                {
                    nombre = "Evil Nicolás",
                    email = "correo@nico.pe",
                    telefono = "+56 9 8765 4321",
                    estado = "Inactivo"
                }
            };

            return Ok(clientes);
        }
    }
}