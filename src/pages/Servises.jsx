import React from "react";

export default function Servise() {
  return (
    <section
      style={{ fontFamily: "Nunito, sans-serif" }}
      className="flex flex-col h-screen w-full gap-8 bg-gradient-to-l  from-[#d4e0fc] via-white to-[#f9eff1]"
    >
      <div className="flex flex-col justify-center items-center px-10 py-5 gap-5">
        <h1 className="text-[14px] lg:text-[20px]">
          <strong>Service</strong>
        </h1>
        <h2 className="flex justify-center items-center text-[12px] lg:text-[16px] text-center">
          we offer youth with chances for career development in their practice.
          We also <br /> support a wide range of services to ensure client
          satisfation
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center px-10 gap-5">
        <div className=" flex flex-col rounded-2xl gap-3 shadow-2xl py-3 px-5 w-[331px] text-gray-500">
          <img src="/public/2.services/icon1.png" alt="" />
          <h2 className="text-[14px] lg:text-[20px] text-gray-700">
            sent Text Instantly
          </h2>
          <p className="text-[12px] lg:text-[16px]">
            financial plannding, forecasting and adjusting rapidly with customer
            demands and budgets.
          </p>
          <button className="text-blue-600">Learn More➡️</button>
        </div>
        <div className=" flex flex-col rounded-2xl gap-3 shadow-2xl py-3 px-5 w-[331px] text-gray-500">
          <img src="/public/2.services/icon2.png" alt="" />
          <h2 className="text-[14px] lg:text-[20px] text-gray-700">
            Better Organized
          </h2>
          <p className="text-[12px] lg:text-[16px]">
            Latest technology and experienced guidance, trained HR specialists
            to keep updated.
          </p>
          <button className="text-blue-600">Learn More➡️</button>
        </div>
        <div className=" flex flex-col rounded-2xl gap-3 shadow-2xl py-3 px-5 w-[331px] text-gray-500">
          <img src="/public/2.services/icon3.png" alt="" />
          <h2 className="text-[14px] lg:text-[20px] text-gray-700">
            Analytical Statistics
          </h2>
          <p className="text-[12px] lg:text-[16px]">
            Messages, real-time reminders, memos, and many more will keep your
            team in sync.
          </p>
          <button className="text-blue-600">Learn More➡️</button>
        </div>
      </div>
    </section>
  );
}
