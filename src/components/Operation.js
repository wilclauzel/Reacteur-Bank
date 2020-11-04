import React from "react";

const Operation = ({ rank, operation }) => {
  const lineStyle =
    rank % 2 > 0
      ? { backgroundColor: "#FFFFFF" }
      : { backgroundColor: "#cec4c4" };

  return (
    <div className="operation" style={lineStyle}>
      <span>{operation.date}</span>
      <span>{operation.description}</span>
      <span>{operation.amount} €</span>
    </div>
  );
};

export default Operation;
