import React from "react";
import { AuthContext } from "./Context/AuthContexProvider";

const Status = () => {
  const { isAuth, token } = React.useContext(AuthContext);
  return <div><h3 style={{margin:"5% 15%"}}>{isAuth ? `token is ${token}` : `user has not logged in`}</h3></div>;
};

export { Status };
