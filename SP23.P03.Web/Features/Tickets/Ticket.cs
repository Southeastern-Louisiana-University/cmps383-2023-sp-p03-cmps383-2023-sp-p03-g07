using System;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Features.Tickets
{
	public class Ticket
	{
		public int Id { get; set; }

		public int ConfirmationNumber { get; set; }

        public int? UserId { get; set; }

        public virtual User? Manager { get; set; }

		public int Cost { get; set; }

		public string? DepartureDate { get; set; }

		public string? ReturnDate { get; set; }

		public int TrainStationId { get; set; }

        public List<TrainStation> TrainStations { get; set; } = new List<TrainStation>();

    }
}

