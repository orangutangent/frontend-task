import Ticket from "./Ticket";
import { Status, TicketType } from "../../RTK/ticketSlice";
import { useAppSelector } from "../utils/hooks";
import Loading from "./Loading";

export default function ListTickets() {
  const tickets = useAppSelector((state) => state.tickets.tickets);
  const status = useAppSelector((state) => state.tickets.status);
  return (
    <div className="flex flex-col items-center">
      {status === Status.LOADING ? (
        <Loading />
      ) : (
        tickets.map((ticket: TicketType) => (
          <Ticket key={ticket.id} {...ticket} />
        ))
      )}
    </div>
  );
}
