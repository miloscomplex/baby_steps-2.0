import Form from "./Form";
import React, { useState } from 'react';
import { signInURL } from "../constants";

function Signin() {

  return (
    <div className="container">
      <h1>Please sign-in</h1>
      <Form submitURL={signInURL} />
    </div>
  );
}

export default Signin;