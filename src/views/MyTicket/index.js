import React from "react";

export const MyTicket = () => {
  const ticket = localStorage.getItem("ticket");

  return (
    <>
      <h1>Mi turno:</h1>
      {ticket}
    </>
  );
};
