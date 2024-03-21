export type TicketType = {
  id: number;
  cost: number;
  departureTime: string;
  arrivalTime: string;
  flightDuration: string;
  layovers: string[];
  departureLocation: string;
  arrivalLocation: string;
  airline: string;
  departureDate: string;
  arrivalDate: string;
  flightClass: string;
  luggageAvailability: boolean;
};

export default function Tickets(
  ticket: TicketType
): React.ReactElement<TicketType> {
  return (
    <div className="w-1/2 border-2 border-gray-300 mx-auto my-10 p-6 rounded-xl">
      <div className="flex justify-between items-center w-full px-12 my-2">
        <div className="text-5xl text-blue-600 font-semibold">
          {ticket.cost}$
        </div>
        <img src="/img/S7.jpg" alt="S7 logo" className="w-1/4 " />
      </div>
      <div className="flex justify-around my-4">
        <div className="inline-block text-center">
          <div className="text-xl text-gray-500">
            {ticket.departureLocation} - {ticket.arrivalLocation}
          </div>
          <div className="text-3xl">
            {ticket.departureTime} - {ticket.arrivalTime}
          </div>
        </div>
        <div className="inline-block text-center">
          <p className="text-xl text-gray-500">On the way</p>
          <p className="text-3xl">{ticket.flightDuration}</p>
        </div>
        <div className="inline-block text-center">
          <p className="text-xl text-gray-500">
            {ticket.layovers.length > 0
              ? ticket.layovers.length + " layovers"
              : "No layovers"}{" "}
          </p>
          <p className="text-3xl">
            {ticket.layovers.length > 0 &&
              ticket.layovers.map((layover, index) => (
                <li key={index} className="list-none">
                  {layover +
                    (index !== ticket.layovers.length - 1 ? " , " : "")}
                </li>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}
