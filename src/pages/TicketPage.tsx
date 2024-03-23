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
          <div className="flex items-center xs:flex-col xs:mb-4 justify-between">
            <div className="flex items-center">
              <svg
                width="96px"
                height="96px"
                className="w-24 h-24 rounded-full border-2 border-blue-700"
                viewBox="0 -15.5 1055 1055"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M481.585477 550.846892H220.730596l20.908514 20.892841 83.587039 41.801356h113.539192zM766.703014 498.606952s-23.510324 31.347099-15.67355 52.23994h-112.269634l-44.591248 62.694197H764.085531l47.020648-2.617482 15.673549-47.020648-60.076714-65.296007zM382.701055 681.454579h148.898718l-33.964581 62.694197h-146.281236zM380.083572 289.615845l47.020648 54.857423h130.607687l-44.403166-65.296007zM228.56737 394.111399s75.750264-5.219292 96.658779 31.347098l13.056067-10.454257-28.729616-70.530972-78.367747-13.056067-2.617483 62.694198z"
                  fill="#C0EAFF"
                />
                <path
                  d="M788.881086 627.051689h-189.179741a15.673549 15.673549 0 0 1 0-31.347099h189.179741a26.174827 26.174827 0 0 0 18.134297-44.983086l-116.79929-112.42637H333.940643a15.673549 15.673549 0 0 1-15.67355-15.673549v-12.852311a64.998209 64.998209 0 0 0-28.03998-53.885662 64.888494 64.888494 0 0 0-49.904581-10.799076v211.436181l87.08224 39.183873h31.347099a15.673549 15.673549 0 0 1 0 31.347099h-34.716912c-2.225644 0-4.404267-0.470206-6.441828-1.379272l-99.385977-44.73231a15.704896 15.704896 0 0 1-9.23172-14.294277V333.203986c0-6.582891 4.122143-12.476145 10.313195-14.733137a95.922122 95.922122 0 0 1 88.916046 11.739489 95.906449 95.906449 0 0 1 41.362496 76.737697H696.532533c4.059449 0 7.94649 1.567355 10.86177 4.388594l121.344619 116.814964A57.694335 57.694335 0 0 1 846.371665 569.545436a57.553273 57.553273 0 0 1-57.490579 57.506253z"
                  fill="#1F87DD"
                />
                <path
                  d="M490.346992 756.186062H348.893209a15.673549 15.673549 0 0 1-12.570187-25.030658l137.582416-184.587391a15.673549 15.673549 0 1 1 25.1247 18.729892l-118.915219 159.556732h102.80281l142.002357-173.098679a15.673549 15.673549 0 0 1 24.231308 19.874061l-146.704422 178.835198a15.642202 15.642202 0 0 1-12.09998 5.720845zM629.543783 432.480247a15.610855 15.610855 0 0 1-12.115653-5.736519l-104.667963-127.582691h-102.80281l52.94525 71.048199a15.673549 15.673549 0 1 1-25.1247 18.729891l-71.612447-96.078857a15.657876 15.657876 0 0 1 12.570187-25.030659h141.453783a15.673549 15.673549 0 0 1 12.115653 5.736519l109.370028 133.319211a15.657876 15.657876 0 0 1-12.131328 25.594906z"
                  fill="#1F87DD"
                />
                <path
                  d="M553.13523 349.770927h-134.745504a15.673549 15.673549 0 0 1 0-31.347098h134.745504a15.673549 15.673549 0 0 1 0 31.347098zM532.634228 702.801953h-134.745504a15.673549 15.673549 0 0 1 0-31.347099h134.745504a15.673549 15.673549 0 0 1 0 31.347099zM480.504003 503.465752h-13.792724a15.673549 15.673549 0 0 1 0-31.347098h13.792724a15.673549 15.673549 0 0 1 0 31.347098zM569.984296 503.465752h-13.792724a15.673549 15.673549 0 0 1 0-31.347098h13.792724a15.673549 15.673549 0 0 1 0 31.347098zM391.039383 503.465752h-13.792724a15.673549 15.673549 0 0 1 0-31.347098h13.792724a15.673549 15.673549 0 0 1 0 31.347098zM757.424273 503.465752h-100.59284a15.673549 15.673549 0 0 1 0-31.347098h100.59284a15.673549 15.673549 0 0 1 0 31.347098z"
                  fill="#1F87DD"
                />
              </svg>
              <div className="ml-2">
                <h2 className="text-2xl font-semibold">{ticket.airline}</h2>
                <p className="text-xl text-gray-500">
                  {ticket.departureLocation} - {ticket.arrivalLocation}
                </p>
              </div>
            </div>
            <div className="flex items-center xs:flex-col xs:mt-4">
              <div className="text-xl text-gray-500">
                {ticket.departureDate} - {ticket.arrivalDate}
              </div>
              <div className="ml-2 text-xl text-gray-500">
                {ticket.departureTime} - {ticket.arrivalTime}
              </div>
            </div>
          </div>
          <div className="flex items-center xs:flex-col justify-between mt-4">
            <div className="flex items-center xs:flex-col">
              <div className="text-xl text-gray-500">
                {ticket.flightDuration} hours
              </div>
              <div className="ml-2 text-xl text-gray-500">
                {ticket.numOfLayovers} layovers
              </div>
            </div>
            <div className="flex items-center xs:flex-col">
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
                Купить билет
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
