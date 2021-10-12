import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from 'formik';

const SIGN_IN_SCHEMA = yup.object({
  email: yup.string().email().required,
  password: yup
    .string()
    .min(8)
    .max(32)
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/
  ).required,
  remember: yup.string()
  
});

function SignInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemembering, setIsRemembering] = useState(false);

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };
  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleRemember = () => {
    setIsRemembering(!isRemembering);
  };

  return (
    <form>
      <input
        name="email"
        value={email}
        onChange={handleEmail}
        placeholder="email"
      />
      <input
        name="password"
        value={password}
        onChange={handlePassword}
        placeholder="password"
      />
      <label>
        <input
          type="checkbox"
          name="remember"
          value={isRemembering? "remember": ""}
          checked={isRemembering}
          onChange={handleRemember}
        />
        запомнить
      </label>
    </form>
  );
}

export default SignInForm;
