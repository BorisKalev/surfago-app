import React, { useState } from "react";

const Survey = () => {
  const numOptions = 10;

  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (index) => {
    setSelectedOption(index);
  };
  return (
    <div className="text-left flex flex-col justify-center items-center w-full mt-5 px-4">
      <div className="w-full max-w-lg">
        <p className="font-bold text-2xl text-wrap">
          Take our quick survey for your chance to WIN a £150 gift card to spend
          on our store.
        </p>
        <p className="text-md mt-5">
          We would LOVE to hear from you and get some feedback on our store.
          Simply enter your details, answer a few short questions and you'll be
          in with a chance to WIN a £150 Beach Boutique Gift Card.
        </p>
        <div className="flex sm-max:flex-col justify-between gap-3 mt-5 w-full">
          <div className="flex flex-col w-full">
            <h1 className="font-bold text-left">First Name</h1>
            <input
              type="text"
              placeholder="First Name"
              className="border border-black p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="font-bold text-left">Last Name</h1>
            <input
              type="text"
              placeholder="Last Name"
              className="border border-black p-2"
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-5">
          <h1 className="font-bold">Email *</h1>
          <input
            type="text"
            placeholder="ex:bob@gmail.com"
            className="border border-black p-2"
          />
        </div>
        <div className="flex flex-col mt-5 w-full">
          <h1 className="font-bold">
            How likely are you to recommend us to a friend? (1 being the lowest)
            *
          </h1>
          <div className="flex gap-2 mt-3 items-center">
            {Array.from({ length: numOptions }).map((_, index) => (
              <button
                onClick={() => handleClick(index)}
                key={index}
                className={`px-3 py-1 h-10 w-10 text-white rounded-full hover:opacity-50 ${
                  selectedOption === index ? "bg-blue-500" : "bg-blue-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-5 w-full">
          <h1 className="font-bold">
            Is there anything you would you like us to change?
          </h1>
          <textarea className="border border-black w-full h-[10rem] mt-3"></textarea>
        </div>

        <div className="flex flex-col w-full mt-5">
          <h1 className="font-bold">Do you... *</h1>
          <ul>
            <li>
              <label className="flex items-center gap-2 mt-3">
                <input type="checkbox" className="cursor-pointer" />
                Surf
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="cursor-pointer" />
                Sea Swim
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="cursor-pointer" />
                Just love the beach
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="cursor-pointer" />
                All of the above!
              </label>
            </li>
          </ul>
        </div>

        <button className="mt-10 bg-blue-500 px-3 py-1 text-white rounded-md text-lg hover:opacity-50">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Survey;
