import React from "react";

export default function Contact() {
  return (
    <section
      style={{ fontFamily: "Nunito, sans-serif" }}
      className="flex flex-col bg-gradient-to-l  from-[#d4e0fc] via-white to-[#f9eff1] h-screen w-full pl-3 justify-center items-center"
    >
      <form className="flex flex-col bg-white/40 rounded-2xl gap-5 px-6 py-4 m-3 lg:w-[500px] h-[200px] border-white border-2 ">
        <input
          className="rounded-[8px] py-1 px-2 bg-white text-gray-500 text-[10px] lg:text-[13px] "
          type="text"
          placeholder="Write your name"
        />
        <input
          className="rounded-[8px] py-1 px-2 bg-white text-gray-500 text-[10px] lg:text-[13px]"
          type="email"
          placeholder="Write your email"
        />
        <textarea
          className="rounded-[8px] py-1 px-2 bg-white text-gray-500 text-[10px] lg:text-[13px]"
          name=""
          id=""
          placeholder="Write your message"
        ></textarea>
      </form>
      <div className="flex flex-col absolute lg:right-0 bottom-0 lg:bottom-1/3 bg-[url('/7.contact/image1.png')] bg-cover p-5 gap-5 lg:w-1/3">
        <div className="flex gap-3 text-[12px] ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#00a3cc"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              class="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-gray-500">Phone</h3>
            <h3 className="text-gray-400">+880124332334</h3>
          </div>
        </div>
        <div className="flex gap-3 text-[12px] ">
          <div>
            <svg
              fill="#00a3cc"
              width="24px"
              height="24px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#00a3cc"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                  fillRule="evenodd"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div>
            <h3 className="text-gray-500">Email</h3>
            <h3 className="text-gray-400">something@email.com</h3>
          </div>
        </div>
        <div className="flex gap-3 text-[12px] ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
              fill="#00a3cc"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill="#00a3cc"
                  d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div>
            <h3 className="text-gray-500">Location</h3>
            <h3 className="text-gray-400">
              43/A Spooner Street, St laurence, Virginia,Texas
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
