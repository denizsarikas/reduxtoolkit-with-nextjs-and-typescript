"use client";

import { useState } from "react";
import { logOut, logIn, toggleModerator } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

const Login = () => {
  const [username, setUsername] = useState("");

  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const dispatch = useDispatch<AppDispatch>();

  const onClickLogIn = () => {
    dispatch(logIn(username));
  };

  const onClickToggle = () => {
    dispatch(toggleModerator());
  };

  const onClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="flex flex-col gap-8">
      <input
        className="text-black"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={onClickLogIn}>Log In</button>

      <button onClick={onClickLogOut}>Log Out</button>

      {isAuth && (
        <button onClick={onClickToggle}>Toggle Moderator Status</button>
      )}
    </div>
  );
};

export default Login;
