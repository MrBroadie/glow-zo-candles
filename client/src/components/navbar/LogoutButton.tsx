import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logoutImg from "../../media/logout.png";

type Props = {
  styleIcons: string;
};

const LogoutButton = (props: Props) => {
  const { logout } = useAuth0();

  return (
    <>
      <img
        src={logoutImg}
        alt="logout button"
        className={props.styleIcons}
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      />
    </>
  );
};

export default LogoutButton;
