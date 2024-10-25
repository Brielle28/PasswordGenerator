import { useState } from "react";
import "../index.css";
import { MdArrowRightAlt } from "react-icons/md";

export const PasswordGenerator = () => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (e) => {
    setValue(e.target.value);
  };

  const [checkboxes, setCheckboxes] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  return (
    <div className="bg-[#100F15] h-screen flex flex-col items-center justify-center px-4 sm:px-8">
      <h1 className="text-[#817F8D] font-NotoSans font-bold mb-3">
        Password Generator
      </h1>
      <div
        contentEditable="true"
        className="bg-[#24232B] w-full sm:w-[80%] md:w-[50%] lg:w-[26%] font-Oxanium outline-0 border-0 text-[20px] font-medium p-3 min-h-[40px] flex items-center pl-6"
      >
        <h1 className="text-gray-500 opacity-50">P4$5W0rD!</h1>
      </div>
      <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[26%] flex-col bg-[#24232B] px-6 py-6 mt-4 flex items-start justify-start font-IBMPlexMono">
        {/* slider */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center justify-between w-full mb-7">
            <h1 className="text-[13px] text-white font-IBM Plex Mono">
              Character Length
            </h1>
            <span className="text-[17px] text-[#A4FFAF] font-IBM Plex Mono">
              {value}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="30"
            value={value}
            onChange={handleSliderChange}
            className="w-full h-1 bg-black appearance-none cursor-pointer slider"
          />
        </div>
        {/* input field */}
        <div className="w-full mt-10 ml-1">
          <div className="bg-[#24232B] w-full text-white">
            <div className="flex flex-col space-y-4">
              {/* Uppercase */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="uppercase"
                  checked={checkboxes.uppercase}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 bg-transparent border border-gray-400 rounded-sm appearance-none md:w-5 md:h-5 checked:border-white focus:outline-none"
                />
                <span className="text-[12px] md:text-sm">Include Uppercase Letters</span>
              </label>

              {/* Lowercase */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="lowercase"
                  checked={checkboxes.lowercase}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 bg-transparent border border-gray-400 rounded-sm appearance-none md:w-5 md:h-5 checked:bg-black checked:border-white focus:outline-none"
                />
                <span className="text-[12px] md:text-sm">Include Lowercase Letters</span>
              </label>

              {/* Numbers */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="numbers"
                  checked={checkboxes.numbers}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 bg-transparent border border-gray-400 rounded-sm appearance-none md:w-5 md:h-5 checked:bg-black checked:border-white focus:outline-none"
                />
                <span className="text-[12px] md:text-sm">Include Numbers</span>
              </label>

              {/* Symbols */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="symbols"
                  checked={checkboxes.symbols}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 bg-transparent border border-gray-400 rounded-sm appearance-none md:w-5 md:h-5 checked:bg-black checked:border-white focus:outline-none"
                />
                <span className="text-[12px] md:text-smm">Include Symbols</span>
              </label>
            </div>
          </div>
        </div>
        {/* strength showcase */}
        <div className="flex items-center justify-between w-full bg-[#18171F] mt-5 p-3">
          <h1 className="font-medium text-gray-200 font-IBMPlexMono">
            Strength
          </h1>
          <div className="flex items-center justify-center gap-1">
            <div className="w-2 h-6 font-bold border-2 border-white font-IBMPlexMono" />
            <div className="w-2 h-6 font-bold border-2 border-white font-IBMPlexMono" />
            <div className="w-2 h-6 font-bold border-2 border-white font-IBMPlexMono" />
            <div className="w-2 h-6 font-bold border-2 border-white font-IBMPlexMono" />
          </div>
        </div>
        {/* generate button */}
        <button className="mt-5 flex items-center justify-center gap-2 bg-transparent border-2 border-[#A4FFAF] w-full p-2">
          <h1 className="font-bold font-IBMPlexMono text-[#A4FFAF]">
            Generate
          </h1>
          <MdArrowRightAlt
            className="font-bold font-IBMPlexMono text-[#A4FFAF] mt-1"
            size={30}
          />
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
