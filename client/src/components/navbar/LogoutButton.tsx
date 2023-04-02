import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logoutImg from "../../media/logout.png";

type Props = {
  styleIcons: string;
};

//don't want to reload the page on login or logout
const LogoutButton = (props: Props) => {
  const { logout } = useAuth0();
  //https://auth0.com/blog/redux-practical-tutorial/
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
