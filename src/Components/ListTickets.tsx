import Ticket, { TicketType } from "./Ticket";
import React from "react";
import { fetchData } from "../utils/fetchData";

export default function ListTickets() {
  const [tickets, setTickets] = React.useState<TicketType[]>([]);
  React.useEffect(() => {
    const fetchTickets = async () => {
      const data = await fetchData();
      setTickets(data);
    };
    fetchTickets();
  }, []);
  return (
    <div>
      {tickets.map((ticket: TicketType) => (
        <Ticket key={ticket.id} {...ticket} />
      ))}
    </div>
  );
}
