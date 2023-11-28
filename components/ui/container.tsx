import React from "react";

export default function Container({ children, className }: any) {
  return (
    <div
      className={`${className ? className : ""} max-w-7xl mx-auto px-5 py-2`}
    >
      {children}
    </div>
  );
}
