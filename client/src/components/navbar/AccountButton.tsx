import React from "react";
import account from "../../media/account.png";

type Props = {
  styleIcons: string;
};

const AccountButton = (props: Props) => {
  return <img src={account} alt="account" className={props.styleIcons} />;
};

export default AccountButton;
