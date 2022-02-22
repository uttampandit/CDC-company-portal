import React from "react";

const Hamburger = () => {
  return (
    <div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_115_7)">
          <path
            d="M33.3333 20H16.6666"
            stroke="#302C5C"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.3333 10L6.66663 10"
            stroke="#302C5C"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.3333 30H26.6666"
            stroke="#302C5C"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_115_7">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(0 40) rotate(-90)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Hamburger;
