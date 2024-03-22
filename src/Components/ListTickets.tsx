import Ticket from "./Ticket";
import { TicketType } from "../../RTK/ticketSlice";
import { useAppSelector } from "../utils/hooks";

export default function ListTickets() {
  const tickets = useAppSelector((state) => state.tickets.tickets);
  return (
    <div className="flex flex-col items-center">
      {tickets.map((ticket: TicketType) => (
        <Ticket key={ticket.id} {...ticket} />
      ))}
    </div>
  );
}
