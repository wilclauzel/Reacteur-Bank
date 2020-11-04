import React from "react";

const Operation = ({ rank, operation }) => {
  return (
    <div
      className="operation"
      style={
        rank % 2 > 0
          ? { backgroundColor: "#FFFFFF" }
          : { backgroundColor: "#cec4c4" }
      }
    >
      <span>{operation.date}</span>
      <span>{operation.description}</span>
      <span>{operation.amount} €</span>
    </div>
  );
};

export default Operation;
