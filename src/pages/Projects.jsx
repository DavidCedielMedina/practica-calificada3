import React from "react";

export default function Projects() {
  return (
    <section
      style={{ fontFamily: "Nunito, sans-serif" }}
      className="flex flex-col justify-start items-center h-full w-full px-5 gap-5 bg-gradient-to-l  from-[#d4e0fc] via-white to-[#f9eff1]"
    >
      <h1 className="py-5 text-[14px]">Our Projects</h1>
      <p className="text-[12px]">
        A project is a single or team activity, combining research and
        design with best effort. Here are some of our team's projects
      </p>
      <div className="grid grid-cols-1 p-3 gap-3">
        <img src="/public/5.projects/image1.png" alt="" />
        <img src="/public/5.projects/image2.png" alt="" />
        <img src="/public/5.projects/image3.png" alt="" />
        <img src="/public/5.projects/image4.png" alt="" />
        <img src="/public/5.projects/image5.png" alt="" />
        <img src="/public/5.projects/image6.png" alt="" />
      </div>
      <div>
        <button className="bg-gradient-to-l  from-[#d4e0fc] via-white to-[#f9eff1] py-2 px-3 rounded-2xl border border-purple-300 text-purple-400">
          View More
        </button>
      </div>
    </section>
  );
}
