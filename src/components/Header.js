import React from "react";
import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div>
          <Logo />
          <User userName="William" />
        </div>
      </div>
    </header>
  );
};
export default Header;
