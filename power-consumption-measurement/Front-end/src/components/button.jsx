import React from "react";

const Button = ({ type, disabled, className, props }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} text-white py-2 px-6 border bg-dark-500 border-purple-500 rounded-lg font-bold hover:bg-blue-500 hover:duration-300 hover:ease-in-out`}
    >
      {props}
    </button>
  );
};


export default Button;
