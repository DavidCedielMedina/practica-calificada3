import React from "react";

export default function Team() {
  return (
    <div
      style={{ fontFamily: "Nunito, sans-serif" }}
      className="flex flex-col justify-center items-center p-4 bg-gradient-to-l  from-[#d4e0fc] via-white to-[#f9eff1] "
    >
      <h1 className="text-[16px] py-5">
        {" "}
        <strong>Our Team</strong>
      </h1>
      <p className="text-[14px]">
        People from various origins, cultures, and personalities make up our
        team. This blend makes it a powerful team
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 p-3 gap-5 ">
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-[425px] w-[258px]"
            src="/6.team/image1.png"
            alt=""
          />
          <h2>John Adams</h2>
          <h3>CEO</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-[425px] w-[258px]"
            src="/6.team/image2.png"
            alt=""
          />
          <h2>Carrey Johnson</h2>
          <h3>Senior Developer</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-[425px] w-[258px]"
            src="/6.team/image3.png"
            alt=""
          />
          <h2>Ray Marie</h2>
          <h3>Designer</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-[425px] w-[258px]"
            src="/6.team/image4.png"
            alt=""
          />
          <h2>Austin Min</h2>
          <h3>Designer</h3>
        </div>
      </div>
      <div>
        <button className="bg-gradient-to-l  from-[#d4e0fc] via-white to-[#f9eff1] py-2 px-3 my-8 rounded-2xl border border-purple-300 text-purple-400">
          View More
        </button>
      </div>
    </div>
  );
}
