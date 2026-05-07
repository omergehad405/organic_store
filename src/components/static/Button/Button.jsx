import React from "react";

function Button({ text }) {
  return (
    <div>
      <button className="bg-[#679509] uppercase border-none text-white px-6 py-4 font-bold transition duration-500 cursor-pointer hover:bg-[#505050] hover:border hover:border-gray-400">
        {text}
      </button>
    </div>
  );
}

export default Button;
