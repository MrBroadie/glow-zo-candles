import React from "react";
import { useNavigate } from "react-router-dom";
import error404 from "../../media/error404.gif";

function ErrorPage() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-darkBlue">
      <img className="w-fit h-4/6" src={error404} alt="404 image" />
      <button className="text-white" onClick={navigateHome}>
        Home
      </button>
    </div>
  );
}

export default ErrorPage;
