import React from "react";
import backArrow from "../assets/back-arrow.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="bg-white h-1/6  uppercase border-t-2 border-red-200">
      <div className="flex flex-col sm:flex-row tracking-wide text-red-600 py-2">
        <Link
          to="/"
          className="md:text-5xl sm:text-4xl text-2xl font-extrabold max-sm:px-2 px-3"
        >
          Harshavardhan Putta
        </Link>
        <Link
          to="/album"
          className="sm:text-sm text-xs lowercase font-thin h-fit cursor-pointer max-sm:px-2 hover:bg-black"
        >
          Dont touch me
        </Link>
      </div>
      <div className="flex justify-between max-sm:px-2 px-3">
        <div className="tracking-wide sm:text-3xl text-2xl font-medium">
          Software Developer
        </div>{" "}
        {location.pathname !== "/" && (
          <div className="bg-red-300 flex justify-center p-1">
            <Link
              to="/"
              className="text-center w-8 h-8"
              style={{
                backgroundImage: `url(${backArrow})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
