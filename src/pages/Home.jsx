import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-full justify-center items-center divide-x gap-8">
      <section className="flex">
        <div className="flex justify-end-safe pl-10 pt-5 flex-col w-[40%]">
          <h1 className="text-[12px]">Bootstrap 5 theme</h1>
          <h2 className="text-[10px]">crafted by themeWagon</h2>
          <p className="text-[8px]">
            ThemeWagon offers an wide array of category-oriented Free and
            Premiun Bootstrap HTML Templates and Themes
          </p>
          <button></button>
        </div>
        <div className="flex w-[60%] object-cover">
          <img
            className="object-fill"
            src="/public/1.home/illustration1.png"
            alt=""
          />
        </div>
      </section>
      <footer className="flex gap-3.5">
        <img
          className="h-[10px] w-[40px]"
          src="/public/1.home/google.png"
          alt=""
        />
        <img
          className="h-[10px] w-[40px]"
          src="/public/1.home/netflix.png"
          alt=""
        />
        <img
          className="h-[10px] w-[40px]"
          src="/public/1.home/microsoft.png"
          alt=""
        />
        <img
          className="h-[10px] w-[40px]"
          src="/public/1.home/mailbuster.png"
          alt=""
        />
        <img
          className="h-[10px] w-[40px]"
          src="/public/1.home/themewagon.png"
          alt=""
        />
      </footer>
    </div>
  );
}
