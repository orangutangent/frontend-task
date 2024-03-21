import React from "react";
import Sort from "../Components/Sort";
import ListTickets from "../Components/ListTickets";

const Home: React.FC = () => {
  return (
    <div>
      <Sort />
      <ListTickets />
    </div>
  );
};

export default Home;
