import React from "react";
import Operation from "./Operation";
import Button from "./Button";

const Account = ({ account }) => {
  const bandStyle = { backgroundColor: account.color };
  return (
    <div className="account">
      <div className="account-band" style={bandStyle}>
        <h2>{account.name}</h2>
        <h2>{account.balance} €</h2>
      </div>
      {account.operations.map((operation, index) => {
        return <Operation key={index} operation={operation} rank={index} />;
      })}
      <Button children="SEE MORE" />
    </div>
  );
};

export default Account;
