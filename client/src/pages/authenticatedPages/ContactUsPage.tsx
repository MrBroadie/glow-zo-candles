import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../app/userSlice";
import Button from "../../components/button/Button";

const ContactUsPage = () => {
  const { loginWithPopup } = useAuth0();
  const authUser = useAppSelector(selectUser);
  return (
    <>
      {authUser.sub.length ? (
        <p>Render if logged in</p>
      ) : (
        <>
          <p>Please login to view contact information</p>{" "}
          <Button
            css="font-sans"
            text="Login"
            handleClickFunction={loginWithPopup}
          />
        </>
      )}
    </>
  );
};

export default ContactUsPage;
