import { TicketType } from "../../RTK/ticketSlice";
import { useNavigate } from "react-router-dom";

export default function Tickets(
  ticket: TicketType
): React.ReactElement<TicketType> {
  const navigate = useNavigate();
  return (
    <div
      className=" border-2 border-gray-300 my-10 p-6 rounded-xl hover:scale-105 duration-300 ease-in-out cursor-pointer"
      onClick={() => navigate(`/ticket/${ticket.id}`)}
    >
      <div className="flex justify-between xs:flex-col items-center w-full px-12 my-2">
        <div className="text-5xl text-blue-600 font-semibold">
          {ticket.cost}$
        </div>
        <img
          src="https://www.aex.ru/images/media/900/36494.jpg"
          alt="S7 logo"
          className="w-1/4 sm:w-4/12 xxs:w-5/6"
        />
      </div>
      <div className="flex justify-around xs:flex-col my-4">
        <div className="inline-block text-center xs:mb-4">
          <div className="text-xl text-gray-500">
            {ticket.departureLocation} - {ticket.arrivalLocation}
          </div>
          <div className="text-3xl">
            {ticket.departureTime} - {ticket.arrivalTime}
          </div>
        </div>
        <div className="inline-block text-center xs:mb-4">
          <p className="text-xl text-gray-500">On the way</p>
          <p className="text-3xl">{ticket.flightDuration} hours</p>
        </div>
        <div className="inline-block text-center xs:mb-4">
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
