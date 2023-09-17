import React from "react";
function Test() {
  return (
    <div className="container bg-primary rounded-5 p-5 mt-4 bg-opacity-25">
      <div className="mt-2">
        <h1 className="text-center">SUBSCRIBE</h1>
      </div>
      <div className="p-3">
        <p className="text-center fw-bold">
          Sign up your email address to receive news and updates
        </p>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="p-2">
          <input className="rounded-3 p-2 " placeholder="Frist Name" />
        </div>
        <div className="p-2">
          <input className="rounded-3 p-2" placeholder="Last Name" />
        </div>
        <div className="p-2">
          <input className="rounded-3 p-2" placeholder="Email" />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3 ">
        <button className="rounded-3 p-2 w-25 text-white bg-danger bg-opacity-75">
          Subscribe
        </button>
      </div>
    </div>
  );
}
export default Test;