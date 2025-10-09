import React from "react";

export default function Details() {
  return (
    <div className="flex flex-col gap-3 p-10">
      <div className="flex p-3 gap-3">
        <div>
          <img
            className="object-fill"
            src="/public/3.details/illustration3.png"
            alt=""
          />
        </div>
        <div>
          <h1>A creative team which builds stunning UI/UX</h1>
          <p>
            Today, I'd like to show you some incredible Sign Up screen app UI
            ideas and concepts that offer a modern user experience. The most
            stunning, cutting-edge UI/UX.
          </p>
          <p>
            Klean is a free Bootstrap 5 template for multipurpose landing pages.
            This design is a perfect choice, carefully curated by ThemeWagon
          </p>
          <button>Read More</button>
        </div>
      </div>
      <div className="flex p-3 gap-3">
        <div>
          <h1>Devoted to defining the cutting edge</h1>
          <p>
            "This new creation is cutting-edge technology," says the researcher,
            "whose study originates from a business at the forefront of space
            science."
          </p>
          <p>
            Klean is a free Bootstrap 5 template for multipurpose landing pages.
            This design is a perfect choice, carefully curated by ThemeWagon
          </p>
          <button>Read More</button>
        </div>
        <div>
          <img src="/public/3.details/illustration6.png" alt="" />
        </div>
      </div>
    </div>
  );
}
