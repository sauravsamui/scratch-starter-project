import React from "react";

export default function Icon({ name, size = 10, className = "" }) {
  return (
    <svg
      className={`fill-current ${className}`}
      width={size.toString() + "px"}
      height={size.toString() + "px"}
    >
      <use xlinkHref={`/icons/solid.svg#${name}`} />
    </svg>
  );

  
}
