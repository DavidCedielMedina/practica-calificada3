import React from "react";

export default function Features() {
  return (
    <div className="flex flex-col justify-center items-center py-5 px-3 gap-5">
      <div>
        <h1 className="flex flex-col justify-center items-center text-[16px]">
          <strong>Features</strong>
        </h1>
        <p
          className="flex flex-col justify-center items-center text-[14px] p-3 text-center 
        "
        >
          We provide a number of excellent features that will undoubtedly
          improve the user experience. We also provide a better support system
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center p-3 gap-8">
        <div className="flex  flex-col justify-center items-center gap-2">
          <img
            className="h-[100px] w-[130px] lg:hover:scale-105 transition-transform"
            src="/public/4.features/icon1.png"
            alt=""
          />
          <h1 className="flex flex-col justify-center items-center text-center text-[13px] text-gray-700">
            Encrypted Mail
          </h1>
          <p className="flex flex-col justify-center items-center text-center text-[11px] text-gray-600">
            A process of encrypting email communications
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            className="h-[100px] w-[130px] lg:hover:scale-105 transition-transform"
            src="/public/4.features/icon2.png"
            alt=""
          />
          <h1 className="flex flex-col justify-center items-center text-center text-[13px] text-gray-700">
            Display Sharing
          </h1>
          <p className="flex flex-col justify-center items-center text-center text-[11px] text-gray-600">
            With other participants, you may share your screen
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            className="h-[100px] w-[130px] lg:hover:scale-105 transition-transform"
            src="/public/4.features/icon3.png"
            alt=""
          />
          <h1 className="flex flex-col justify-center items-center text-center text-[13px] text-gray-700">
            Private Notebook
          </h1>
          <p className="flex flex-col justify-center items-center text-center text-[11px] text-gray-600">
            Private Notebook is an application that is protected
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            className="h-[100px] w-[130px] lg:hover:scale-105 transition-transform"
            src="/public/4.features/icon4.png"
            alt=""
          />
          <h1 className="flex flex-col justify-center items-center text-center text-[13px] text-gray-700">
            App App Assistance
          </h1>
          <p className="flex flex-col justify-center items-center text-center text-[11px] text-gray-600">
            App Assistant is quickly and effectively ran the system
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            className="h-[100px] w-[130px] lg:hover:scale-105 transition-transform"
            src="/public/4.features/icon5.png"
            alt=""
          />
          <h1 className="flex flex-col justify-center items-center text-center text-[13px] text-gray-700">
            Multiple Printing
          </h1>
          <p className="flex flex-col justify-center items-center text-center text-[11px] text-gray-600">
            Our canvas prints are crafted on top-notch canvas.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            className="h-[100px] w-[130px] lg:hover:scale-105 transition-transform"
            src="/public/4.features/icon6.png"
            alt=""
          />
          <h1 className="flex flex-col justify-center items-center text-center text-[13px] text-gray-700">
            Free Sketch
          </h1>
          <p className="flex flex-col justify-center items-center text-center text-[11px] text-gray-600">
            Our canvas prints are crafted on top-notch canvas.
          </p>
        </div>
      </div>
    </div>
  );
}
