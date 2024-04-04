import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa";

const SignupPage3 = () => {
  const myRef = useRef();
  const [image, setImage] = useState();
  const [isChecked, setIsChecked] = useState({ box1: false, box2: false, box3: false });
  const navigate = useNavigate();

  function handleChecked(option) {
    if (option === 'option1')
      setIsChecked(prev => ({ ...prev, box1: !prev.box1 }));
    else if (option === 'option2')
      setIsChecked(prev => ({ ...prev, box2: !prev.box2 }));
    else
      setIsChecked(prev => ({ ...prev, box3: !prev.box3 }));
  }

  function handleClick() {
    (isChecked.box1 || isChecked.box2 || isChecked.box3) &&  navigate('/signup4');
  }

  return (
    <div>
      <div className="sm:absolute flex items-center sm:-mt-5">
        <img
          onClick={() => navigate("/")}
          className="w-[15%] sm:w-[18%] cursor-pointer ml-5 sm:ml-10"
          src="dribble-logo.png"
          alt="Logo"
        />
        <div onClick={() => navigate("/signup2")} className="p-1 sm:p-2 cursor-pointer ml-8 bg-gray-200 rounded-lg">
          <FaAngleLeft className="text-gray-500 sm:h-5 sm:w-5" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[85%] sm:w-[65%] my-8 sm:my-16">
          <div className="flex flex-col items-center ">
            <h1 className="text-2xl sm:text-3xl font-bold">
              What brings you to Dribble?
            </h1>
            <p className="text-gray-500 text-center mt-3">
              Select the options that best describe you. Don't worry, you can
              explore other options later.
            </p>
          </div>
          <div className="flex flex-col mt-16 items-center">
            <div className="flex w-full justify-center px-2 ">

              {[...Array(3)].map((_, index) => (
                <div key={index} onClick={() => handleChecked(`option${index + 1}`)} className={"m-1 sm:m-4 relative p-3 sm:p-4 shadow-sm flex flex-col w-full border-2 rounded-2xl" + (isChecked ? ' border-pink-600 ' : '')}>
                  <div className={"flex flex-col text-center items-center" + (isChecked[`box${index + 1}`] && " -mt-12 md:-mt-14 lg:-mt-20 xl:-mt-24")}>
                    <img src={`signup3Pic${index + 1}.png`} alt={`pic${index + 1}`} />
                    <h1 className="mb-2 font-bold md:text-lg mr-2">{
                      index === 0 ? "I'm a designer looking to share my work" :
                        index === 1 ? "I'm looking to hire a designer" :
                          "I'm looking for design inspiration"
                    }</h1>
                  </div>
                  <div className="flex flex-col text-center items-center">
                    {isChecked[`box${index + 1}`] && (
                      <p className="text-center p-1 text-sm md:text-base text-gray-500">
                        With over 7 million shots from a vast community of designers, Dribble is the leading source for Design inspiration
                      </p>
                    )}
                    <div className="border w-5 h-5 sm:w-7 sm:h-7 rounded-full">
                      {isChecked[`box${index + 1}`] && <IoMdCheckmarkCircle className="w-full text-pink-600 h-full" />}
                    </div>
                  </div>
                </div>
              ))}
              
            </div>

            <section className="mt-10 text-center">
              <h1 className=" font-bold">
                {((isChecked.box1 || isChecked.box2 || isChecked.box3) ? " Anything else? You can select multiple " : "")}
              </h1>
              <button
                onClick={handleClick}
                className={"p-2 border-0 mt-5 mb-2 px-10 sm:px-20 font-medium text-white rounded-lg bg-pink-600" + ((isChecked.box1 || isChecked.box2 || isChecked.box3) ? " opacity-100" : " opacity-35")}
              >
                Finish 
              </button>
              <p className="text-gray-400 font-medium">{((isChecked.box1 || isChecked.box2 || isChecked.box3) ? " or Press RETURN" : "")}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage3;
