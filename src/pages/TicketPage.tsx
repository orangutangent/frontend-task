import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { TicketType } from "../../RTK/ticketSlice";
import Loading from "../Components/Loading";
import ModalBuyTicket from "../Components/ModalBuyTicket";

const TicketPage = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const isMounted = React.useRef(false);
  const [ticket, setTicket] = React.useState<TicketType | null>(null);
  React.useEffect(() => {
    const fetchData = async () => {
      fetch(`https://65fc67a99fc4425c6530088f.mockapi.io/tickets/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setTicket(data);
        })
        .catch(() => {});
    };
    if (!isMounted.current) {
      fetchData();
      isMounted.current = true;
    }
  }, [id]);

  return (
    <div>
      {ticket ? (
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="mb-4">
            <button
              className="w-24 h-8 rounded-lg bg-blue-700 text-white text-center"
              onClick={() => navigate(-1)}
            >
              ← назад
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={"https://www.aex.ru/images/media/900/36494.jpg"}
                alt={ticket.airline}
                className="w-24 h-24 rounded-full border-2 border-blue-700"
              />
              <div className="ml-2">
                <h2 className="text-2xl font-semibold">{ticket.airline}</h2>
                <p className="text-xl text-gray-500">
                  {ticket.departureLocation} - {ticket.arrivalLocation}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-xl text-gray-500">
                {ticket.departureDate} - {ticket.arrivalDate}
              </div>
              <div className="ml-2 text-xl text-gray-500">
                {ticket.departureTime} - {ticket.arrivalTime}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <div className="text-xl text-gray-500">
                {ticket.flightDuration} hours
              </div>
              <div className="ml-2 text-xl text-gray-500">
                {ticket.numOfLayovers} layovers
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-xl text-gray-500">
                Class: {ticket.flightClass}
              </div>
              <div className="ml-2 text-xl text-gray-500">
                {ticket.luggageAvailability
                  ? "Luggage included"
                  : "No luggage included"}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <div className="text-2xl font-semibold text-light-green-800">
                {ticket.cost}$
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setOpenModal(true)}
                className="bg-blue-500 hover:bg-blue-700 active:scale-90 duration-300 ease-in-out text-white font-semibold py-2 px-4 rounded"
              >
                Buy Ticket
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      {openModal && <ModalBuyTicket handleModal={setOpenModal} />}
    </div>
  );
};

export default TicketPage;
