import React from "react";

export default function Home() {
  return (
    <div
      style={{ fontFamily: "Nunito, sans-serif" }}
      className="flex flex-col w-full min-h-screen justify-center items-center gap-8 bg-gradient-to-l from-[#d4e0fc] via-white to-[#f9eff1]"
    >
      <section className="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-center w-full px-6 lg:pl-20">
        <div className="flex flex-col justify-center text-center lg:text-left gap-5 w-full lg:w-[45%]">
          <h1 className="text-[20px] lg:text-[48px] font-semibold text-purple-500">
            Bootstrap 5 theme
          </h1>
          <h2 className="text-[16px] lg:text-[24px] font-medium">
            crafted by <span className="font-bold">ThemeWagon</span>
          </h2>
          <p className="text-[13px] lg:text-[18px] text-gray-700 leading-relaxed">
            ThemeWagon offers a wide array of category-oriented Free and Premium
            Bootstrap HTML Templates and Themes.
          </p>
          <button className="bg-gradient-to-l from-purple-500 via-purple-300 to-blue-400 text-white rounded-lg shadow-lg w-[110px] py-2 text-[14px] hover:scale-105 transition-all duration-200">
            Check Demo
          </button>
        </div>

        <div className="hidden lg:flex justify-center items-center w-full lg:w-[50%]">
          <img
            className="object-contain w-[90%] h-auto"
            src="/1.home/illustration1.png"
            alt="Illustration"
          />
        </div>
      </section>

      <footer className="flex flex-wrap justify-center items-center gap-5 lg:gap-10 py-10">
        <img
          className="h-[40px] lg:h-[60px] object-contain"
          src="/1.home/google.png"
          alt="Google"
        />
        <img
          className="h-[40px] lg:h-[60px] object-contain"
          src="/1.home/netflix.png"
          alt="Netflix"
        />
        <img
          className="h-[40px] lg:h-[60px] object-contain"
          src="/1.home/microsoft.png"
          alt="Microsoft"
        />
        <img
          className="h-[40px] lg:h-[60px] object-contain"
          src="/1.home/mailbuster.png"
          alt="MailBluster"
        />
        <img
          className="h-[40px] lg:h-[60px] object-contain"
          src="/1.home/themewagon.png"
          alt="ThemeWagon"
        />
      </footer>
    </div>
  );
}
