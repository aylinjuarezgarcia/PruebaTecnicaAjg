using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
namespace PruebaApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("AllowAllOrigins")]
    public class AlumnosController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAlumnos()
        {
            var alumnos = new[]
            {
                new { Id = 1, Nombre = "Adrian", Apellido = "Rendon" },
                new { Id = 2, Nombre = "Angel", Apellido = "Ramirez" },
                new { Id = 3, Nombre = "Luis", Apellido = "Morales" }
            };
            return Ok(alumnos);
        }
    }
}
