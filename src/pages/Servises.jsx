import React from "react";

export default function Servise() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col justify-center items-center px-10 py-5 gap-5">
        <h1 className="text-[12px]">Service</h1>
        <h2 className="flex justify-center items-center text-[10px]">
          we offer youth with chances for career development in their practice.
          We also support a wide range of services to ensure client satisfation
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center px-10 gap-5">
        <div className=" flex flex-col rounded-2xl gap-3 shadow-2xl p-3">
          <img src="/public/2.services/icon1.png" alt="" />
          <h2 className="text-[12px] ">sent Text Instantly</h2>
          <p className="text-[10px] ">
            financial plannding, forecasting and adjusting rapidly with customer
            demands and budgets.
          </p>
          <button>Learn More➡️</button>
        </div>
        <div className=" flex flex-col rounded-2xl gap-3 shadow-2xl p-3">
          <img src="/public/2.services/icon2.png" alt="" />
          <h2 className="text-[12px] ">Better Organized</h2>
          <p className="text-[10px]">
            Latest technology and experienced guidance, trained HR specialists
            to keep updated.
          </p>
          <button>Learn More➡️</button>
        </div>
        <div className=" flex flex-col rounded-2xl gap-3 shadow-2xl p-3">
          <img src="/public/2.services/icon3.png" alt="" />
          <h2 className="text-[12px] ">Analytical Statistics</h2>
          <p className="text-[10px]">
            Messages, real-time reminders, memos, and many more will keep your
            team in sync.
          </p>
          <button>Learn More➡️</button>
        </div>
      </div>
    </section>
  );
}
