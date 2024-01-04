import React from "react";
import TextInput from "../../TextInput";
import { FormProps } from "../types";

const LoginForm: React.FC<FormProps> = ({ isValid, loading }) => {
  return (
    <>
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
        type="text"
        placeholder="Password"
        autoComplete="on"
      />

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          No account?
          <a className="underline" href="">
            Sign up
          </a>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          disabled={!isValid || loading}
        >
          Sign in
        </button>
      </div>
    </>
  );
};

export default LoginForm;
