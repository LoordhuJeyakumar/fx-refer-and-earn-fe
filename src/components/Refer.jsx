import React from "react";
import people from "../assets/images/people.png";
import money1 from "../assets/images/money1.png";
import money2 from "../assets/images/money2.png";
import money3 from "../assets/images/money3.png";
import money4 from "../assets/images/money4.png";
import money5 from "../assets/images/money5.png";
import PopupModalForm from "./PopupModalForm";

function Refer({ handleOpen }) {
  return (
    <div className="flex justify-center xl:px-12  mx-12">
      <div className="refer-header  w-full max-w-[85rem] grid grid-cols-2">
        <div className="content flex items-center ">
          <img src={money1} className="money money1" alt="money1" />
          <div>
            <div className="content-box">
              <div className="w-[75%] p-0 ">
                <h1 className="font-bold mb-0 pb-0 me-10">
                  Let’s Learn & Earn
                </h1>
              </div>
              <div className="w-[75%]  p-0">
                <p className="text-5xl mt-0 pt-0">
                  Get a chance to win up-to{" "}
                  <span className="font-bold  text-[#1A73E8]">Rs. 15,000</span>
                </p>
              </div>
            </div>
            <div className="ms-12 p-5 ps-0">
              <button
                className="bg-[#1A73E8] text-white px-4 py-2 rounded-lg "
                onClick={handleOpen}
              >
                Refer Now
              </button>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img
            src={people}
            alt="people with phone"
            className="w-full px-3 people-phone"
          />

          <img src={money2} className="money money2" alt="money2" />
          <img src={money3} className="money money3" alt="money3" />
          <img src={money4} className="money money4" alt="money4" />
          <img src={money5} className="money money5" alt="money5" />
        </div>
      </div>
    </div>
  );
}

export default Refer;
