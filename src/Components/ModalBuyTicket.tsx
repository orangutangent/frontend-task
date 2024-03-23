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
                className="outline-none mb-4"
                type="text"
                placeholder="Имя"
                required
              />
              <input
                className="outline-none mb-4"
                type="text"
                placeholder="Фамилия"
                required
              />
              <input
                className="outline-none mb-4"
                type="text"
                placeholder="Email"
                required
              />
              <input
                className="outline-none mb-4"
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
              <img
                className="mx-auto h-36 w-36"
                src="/img/success.png"
                alt=""
              />
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
