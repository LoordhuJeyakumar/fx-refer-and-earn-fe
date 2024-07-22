import React from "react";

function ReferButton({ handleOpen }) {
  return (
    <div className="ms-12 p-5 ps-0">
      <button
        className="bg-[#1A73E8] text-white px-12 py-3 rounded-lg "
        onClick={handleOpen}
      >
        Refer Now
      </button>
    </div>
  );
}

export default ReferButton;
