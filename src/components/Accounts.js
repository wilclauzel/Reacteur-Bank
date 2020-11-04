import React from "react";
import Account from "./Account";

const Accounts = ({ accounts }) => {
  return (
    <div className="accounts">
      <div className="wrapper">
        {accounts.map((account, index) => {
          return <Account key={index} account={account} />;
        })}
      </div>
    </div>
  );
};

export default Accounts;
