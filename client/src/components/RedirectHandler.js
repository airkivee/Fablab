import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useRedirect from "../hooks/redirect.hook";

export const RedirectHandler = ({ children }) => {
  const { redirect } = useRedirect();
  // const { pathname } = useLocation();

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return <>{children}</>;
};
