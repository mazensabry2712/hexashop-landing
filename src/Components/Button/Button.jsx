"use client";

import style from "./Button.module.css";
const Button = () => {
  return (
    <button
      className={style.logout}
      onClick={() => {
        console.log("logout");
      }}
    >
      Logout
    </button>
  );
};

export default Button;
