import React from "react";
import TextInput from "../../TextInput";
import { FormProps } from "../types";
import Button from "../../Button";

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
        type="password"
        placeholder="Password"
        autoComplete="on"
      />

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          No account?{" "}
          <a className="underline" href="">
            Sign up
          </a>
        </p>

        <Button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          disabled={!isValid || loading}
        >
          Sign in
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
