import React from "react";
import UserIcon from "./UserIcon";

const User = ({ userName }) => {
  return (
    <div className="user">
      <h3>{userName}</h3>
      <UserIcon />
    </div>
  );
};
export default User;
