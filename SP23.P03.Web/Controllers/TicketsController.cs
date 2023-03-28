//using System;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using SP23.P03.Web.Data;
//using SP23.P03.Web.Features.Authorization;
//using SP23.P03.Web.Features.Tickets;
//using SP23.P03.Web.Features.TrainStations;

//namespace SP23.P03.Web.Controllers
//{
//	public class TicketsController : ControllerBase
//	{
//        private readonly DbSet<Ticket> tickets;
//        private readonly DataContext dataContext;

//        public TicketsController(DataContext dataContext)
//        {
//            this.dataContext = dataContext;
//            tickets = dataContext.Set<Ticket>();
//        }

//        [HttpGet]
//        public IQueryable<TicketDto> GetAllTickets()
//        {
//            return GetTicketDtos(tickets);
//        }

//        [HttpGet]
//        [Route("{id}")]
//        public ActionResult<TicketDto> GetTicketById(int id)
//        {
//            var result = GetTicketDtos(tickets.Where(x => x.Id == id)).FirstOrDefault();
//            if (result == null)
//            {
//                return NotFound();
//            }

//            return Ok(result);
//        }

//        [HttpPost]
//        public ActionResult<TicketDto> CreateTicket(TicketDto dto)
//        {

//            var ticket = new Ticket
//            {
//                ConfirmationNumber = dto.ConfirmationNumber,
//                Cost = dto.Cost,
//                DepartureDate = dto.DepartureDate,
//                ReturnDate = dto.ReturnDate,
//                UserId = dto.UserId

//               // TrainStation = new TrainStationDto {

                
//                //TrainStationId = dto.TrainStationId;

//            };
//            tickets.Add(ticket);

//            dataContext.SaveChanges();

//            dto.Id = ticket.Id;

//            return CreatedAtAction(nameof(GetTicketById), new { id = dto.Id }, dto);
//        }

//        private static IQueryable<TicketDto> GetTicketDtos(IQueryable<Ticket> tickets)
//        {
//            return tickets
//                .Select(x => new TicketDto
//                {
//                    Id = x.Id,
//                    ConfirmationNumber = x.ConfirmationNumber,
//                    Cost = x.Cost,
//                    DepartureDate = x.DepartureDate,
//                    ReturnDate = x.ReturnDate,
//                    UserId = x.UserId
//                });
//        }
//    }
//}

