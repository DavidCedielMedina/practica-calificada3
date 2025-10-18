import React from "react";

export default function Details() {
  return (
    <div
      style={{ fontFamily: "Nunito, sans-serif" }}
      className="flex flex-col gap-3 p-10 bg-gradient-to-l  from-[#d4e0fc] via-white to-[#f9eff1]"
    >
      <div className="flex flex-col p-3 gap-3">
        <div>
          <img
            className="object-fill"
            src="/public/3.details/illustration3.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1>A creative team which builds stunning UI/UX</h1>
          <p className="text-[12px]">
            Today, I'd like to show you some incredible Sign Up screen app UI
            ideas and concepts that offer a modern user experience. The most
            stunning, cutting-edge UI/UX.
          </p>
          <p className="text-[12px]">
            Klean is a free Bootstrap 5 template for multipurpose landing pages.
            This design is a perfect choice, carefully curated by ThemeWagon
          </p>
          <button className="text-[12px] border border-purple-500 text-purple-500 rounded-[8px]">
            Read More
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse p-3 gap-3">
        <div className="flex flex-col gap-4">
          <h1>Devoted to defining the cutting edge</h1>
          <p className="text-[12px]">
            "This new creation is cutting-edge technology," says the researcher,
            "whose study originates from a business at the forefront of space
            science."
          </p>
          <p className="text-[12px]">
            Klean is a free Bootstrap 5 template for multipurpose landing pages.
            This design is a perfect choice, carefully curated by ThemeWagon
          </p>
          <button className="text-[12px] border border-purple-500 text-purple-500 rounded-[8px]">
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
