import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-24 text-blue-700 font-bold">
      <h1 className="text-4xl">Страница не найдена</h1>
      <button
        className="mt-4 bg-blue-700 rounded-xl text-white w-48 h-12 mx-auto"
        onClick={() => navigate("/")}
      >
        На главную
      </button>
    </div>
  );
};

export default NotFound;
