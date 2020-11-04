import React from "react";
const UserIcon = () => {
  return (
    <svg height="100" width="100">
      <circle
        cx="50"
        cy="50"
        r="35"
        stroke="white"
        strokeWidth="3"
        fill="white"
      />
      <circle
        cx="50"
        cy="38"
        r="10"
        stroke="black"
        strokeWidth="4"
        fill="white"
      />
      <path
        d="M 35 68 q 15 -30 30 0"
        stroke="black"
        strokeWidth="5"
        fill="none"
      />
    </svg>
  );
};
export default UserIcon;
