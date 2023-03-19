import React, { useState } from "react";
import "./App.scss";
import LoginButtonComponent from "./components/auth/LoginButtonComponent";

const App = (): JSX.Element => {
  return (
    <>
      <LoginButtonComponent />
      <div className="card"></div>
    </>
  );
};

export default App;
