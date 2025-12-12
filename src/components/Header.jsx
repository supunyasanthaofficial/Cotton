import React from "react";
import Header1 from "../assets/images/Header1.png";

const Header = () => {
  return (
    <header className="relative w-full overflow-hidden">
      <div className="w-full">
        <img
          src={Header1}
          alt="Cotton Clouds Header"
          className="w-full h-auto object-cover"
          style={{ maxWidth: "100%" }}
        />
      </div>
    </header>
  );
};

export default Header;
