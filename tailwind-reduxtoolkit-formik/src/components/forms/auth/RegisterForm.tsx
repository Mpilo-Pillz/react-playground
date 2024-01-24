import React from "react";
import TextInput from "../../TextInput";
import Button from "../../Button";
import { FormProps } from "../types";
import { Link } from "react-router-dom";
import Login from "../../../pages/Auth/Login/Login";

const RegisterForm: React.FC<FormProps> = ({ isValid, loading }) => {
  return (
    <>
      <TextInput
        id="login-first-name"
        name="firstName"
        type="text"
        placeholder="First name"
        autoComplete="on"
      />
      <TextInput
        id="login-last-name"
        name="lastName"
        type="text"
        placeholder="Last name"
        autoComplete="on"
      />
      <TextInput
        id="login-email"
        name="email"
        type="email"
        placeholder="Email"
        autoComplete="on"
      />

      <TextInput
        id="login-password"
        name="password"
        type="password"
        placeholder="Password"
        autoComplete="on"
      />
      <TextInput
        id="login-confirm-password"
        name="confirmPpassword"
        type="password"
        placeholder="Confirm Password"
        autoComplete="on"
      />

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Do you have an account?{" "}
          <Link className="underline" to={Login.route}>
            Sign in
          </Link>
        </p>

        <Button
          type="submit"
          className="inline-block rounded-lg bg-secondary px-5 py-3 text-sm font-medium text-white"
          disabled={!isValid || loading}
        >
          Sign up
        </Button>
      </div>
    </>
  );
};

export default RegisterForm;
