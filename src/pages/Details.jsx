import React from "react";

export default function Details() {
  return (
    <div
      style={{ fontFamily: "Nunito, sans-serif" }}
      className="flex flex-col gap-3 py-10 px-60 bg-gradient-to-l  from-[#d4e0fc] via-white to-[#f9eff1] text-gray-500"
    >
      <div className="flex flex-col lg:flex-row p-3 gap-3">
        <div>
          <img
            className="object-fill"
            src="/public/3.details/illustration3.png"
            alt=""
          />
        </div>
        <div className="flex flex-col  gap-4  ">
          <h1 className="text-black lg:text-[28px]">
            A creative team which <br /> builds stunning UI/UX
          </h1>
          <p className="text-[12px] lg:text-[20px]">
            Today, I'd like to show you some incredible Sign Up screen app UI
            ideas and concepts that offer a modern user experience. The most
            stunning, cutting-edge UI/UX.
          </p>
          <p className="text-[12px] lg:text-[20px]">
            Klean is a free Bootstrap 5 template for multipurpose landing pages.
            This design is a perfect choice, carefully curated by ThemeWagon
          </p>
          <button className="text-[18px] border w-[100px] border-purple-500 text-purple-500 rounded-[8px]">
            Read More
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row p-3 gap-3">
        <div className="flex flex-col gap-4 lg:text-[20px] ">
          <h1 className="text-black lg:text-[28px]">
            Devoted to defining <br /> the cutting edge
          </h1>
          <p className="text-[12px] lg:text-[20px]">
            "This new creation is cutting-edge technology," says the researcher,
            "whose study originates from a business at the forefront of space
            science."
          </p>
          <p className="text-[12px] lg:text-[20px]">
            Klean is a free Bootstrap 5 template for multipurpose landing pages.
            This design is a perfect choice, carefully curated by ThemeWagon
          </p>
          <button className="text-[18px] border w-[100px] border-purple-500 text-purple-500 rounded-[8px]">
            Read More
          </button>
        </div>
        <div>
          <img src="/public/3.details/illustration6.png" alt="" />
        </div>
      </div>
    </div>
  );
}
