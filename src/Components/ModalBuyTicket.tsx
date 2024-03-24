import React from "react";

type ModalBuyTicketProps = {
  handleModal: (value: boolean) => void;
};

const ModalBuyTicket: React.FC<ModalBuyTicketProps> = ({ handleModal }) => {
  const [filled, setFilled] = React.useState(false);
  const handleSubmit = () => {
    setFilled(true);
  };
  return (
    <div>
      <div className="fixed inset-0 w-screen h-screen backdrop-blur-sm flex items-center justify-center">
        <div className="w-96 h-96 bg-white border-2 rounded-xl border-blue-700 px-4 pt-2">
          <div className="flex justify-between">
            <h1
              className={`text-3xl font-bold text-blue-700 my-4 ms-4 ${
                filled ? "invisible" : ""
              }`}
            >
              Купить Билет
            </h1>
            <button
              onClick={() => handleModal(false)}
              className=" p-2 text-center h-12 rounded-lg border-red-500 text-red-500 hover:text-white hover:bg-red-500 duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
          {!filled ? (
            <form action="" className="flex flex-col my-4 px-4">
              <input
                className="outline-none mb-4 border-b-2 border-blue-700 px-2"
                type="text"
                placeholder="Имя"
                required
              />
              <input
                className="outline-none mb-4 border-b-2 border-blue-700 px-2"
                type="text"
                placeholder="Фамилия"
                required
              />
              <input
                className="outline-none mb-4 border-b-2 border-blue-700 px-2"
                type="text"
                placeholder="Email"
                required
              />
              <input
                className="outline-none mb-4 border-b-2 border-blue-700 px-2"
                type="text"
                placeholder="телефон"
                required
              />
              <input
                type="submit"
                value="Подтвердить"
                onClick={handleSubmit}
                className="bg-blue-700 text-white hover:bg-white hover:text-blue-700 border-2 border-blue-700 mt-4 px-4 py-2 rounded-lg cursor-pointer duration-300 ease-in-out "
              />
            </form>
          ) : (
            <div>
              <svg
                className="mx-auto "
                width="200px"
                height="200px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#2bff00"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5"
                    stroke="#00ff91"
                    stroke-width="2"
                    stroke-linecap="round"
                  />{" "}
                  <path
                    d="M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667"
                    stroke="#00ff91"
                    stroke-width="2"
                    stroke-linecap="round"
                  />{" "}
                </g>
              </svg>
              <h1 className="text-3xl font-bold text-green-500 my-4 text-center">
                Билет куплен
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalBuyTicket;