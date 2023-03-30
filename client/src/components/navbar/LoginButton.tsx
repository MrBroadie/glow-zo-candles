import React from "react";
import loginImg from "../../media/enter.png";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  styleIcons: string;
};

const LoginButton = (props: Props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <img
      src={loginImg}
      alt="login button"
      className={props.styleIcons}
      onClick={() => loginWithRedirect()}
    />
  );
};

export default LoginButton;
