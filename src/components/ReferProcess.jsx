import React from "react";
import addfriend from "../assets/icons/add_friend.svg";
import note from "../assets/icons/Layer_10.svg";
import wallet from "../assets/icons/Group 22036.svg";
import progressBackground from "../assets/icons/progress-background.svg";
import ReferButton from "./ReferButton";

const steps = [
  {
    icon: <img src={addfriend} alt="add-friend" />,
    description: "Submit referrals easily via our website’s referral section.",
  },
  {
    icon: <img src={note} alt="note" />,
    description: "Earn rewards once your referral joins an Accredian program.",
  },
  {
    icon: <img src={wallet} alt="wallet" />,
    description:
      "Both parties receive a bonus 30 days after program enrollment.",
  },
];

function ReferProcess({ handleOpen }) {
  return (
    <section className=" refer-process mt-16 w-full flex justify-between flex-col gap-36">
      <h1 className="process-heading">
        How Do I <span >Refer?</span>
      </h1>
      <div className="flex flex-col items-center   bg-blue-50 h-full d-flex justify-between">
        <div className="w-full max-w-7xl process-card-box max-h-fit    h-full">
          <img
            src={progressBackground}
            alt=""
            className="progressBackground object-contain"
          />
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center process-card p-5 sm:w-48"
            >
              <div className="p-4 rounded-full">
                <span>{step.icon}</span>
              </div>
              <div>
                <p className="text-center text-base text-wrap text-gray-700 content sm:text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto">
        <ReferButton handleOpen={handleOpen} />
      </div>
    </section>
  );
}

export default ReferProcess;
