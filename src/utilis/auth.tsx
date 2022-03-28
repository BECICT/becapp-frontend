
import React from 'react'
import { Navigate } from 'react-router-dom';
// import { Redirect } from "react-router-dom";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({isAuthenticated, authenticationPath, outlet}: ProtectedRouteProps) {
  if(isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
};

function auth() {
   const logedin = localStorage.getItem('Authorised')
   return logedin
}
