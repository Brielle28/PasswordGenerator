import { useState } from "react";
import "../index.css";
import { MdArrowRightAlt } from "react-icons/md";

export const PasswordGenerator = () => {
  const [value, setValue] = useState(0); // Character length slider value
  const [password, setPassword] = useState(""); // Store the generated password
  const [copied, setCopied] = useState(false); // Tracks if the password was copied
  const [checkboxes, setCheckboxes] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 4000); // Reset copied state
    });
  };

  const handleSliderChange = (e) => {
    setValue(Number(e.target.value)); // Update slider value as number
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };
  const generatePassword = () => {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let charSet = "";
    if (checkboxes.uppercase) charSet += upperCaseChars;
    if (checkboxes.lowercase) charSet += lowerCaseChars;
    if (checkboxes.numbers) charSet += numberChars;
    if (checkboxes.symbols) charSet += symbolChars;

    if (!charSet) {
      alert("Please select at least one character type");
      return;
    }
    if (value === 0) {
      alert(" please choose how many characters that you want")
    }

    let generatedPassword = "";
    for (let i = 0; i < value; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const getPasswordStrength = () => {
    const activeOptions = Object.values(checkboxes).filter(Boolean).length;
    if (activeOptions === 4) return "Very Strong";
    if (activeOptions === 3) return "Strong";
    if (activeOptions === 2) return "Medium";
    if (activeOptions === 1) return "Weak";
    return "";
  };

  return (
    <div className="bg-[#100F15] h-screen flex flex-col items-center justify-center px-4 sm:px-8">
      <h1 className="text-[#817F8D] font-NotoSans font-bold mb-3">
        Password Generator
      </h1>

      {/* Display generated password */}
      <div
        onClick={handleCopy}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col items-start bg-[#24232B] w-full sm:w-[80%] md:w-[50%] lg:w-[26%] font-Oxanium outline-0 border-0 text-[20px] font-medium p-3 min-h-[60px] h-[50px] pl-6 cursor-pointer"
      >
        <h1
          className={`${
            password ? "text-[#A4FFAF]" : "text-gray-500 opacity-50"
          }`}
        >
          {password || "P4$5W0rD!"}
        </h1>
        { password && isHovered &&  
          <div className="slide-in mr-auto text-[10px] text-gray-400">
            {copied ? "Copied!" : "Click to copy"}
          </div>
        }
      </div>

      <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[26%] flex-col bg-[#24232B] px-6 py-6 mt-4 flex items-start justify-start font-IBMPlexMono">
        {/* Slider */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center justify-between w-full mb-7">
            <h1 className="text-[13px] text-white font-IBMPlexMono">
              Character Length
            </h1>
            <span className="text-[17px] text-[#A4FFAF] font-IBMPlexMono">
              {value}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="30"
            value={value}
            onChange={handleSliderChange}
            className={`${
              value > 0 ? "bg-[#A4FFAF]" : "bg-black"
            } w-full h-1 appearance-none cursor-pointer slider hover:bg-[#A4FFAF]`}
          />
          {value < 0 ? (
            <p> please choose how many characters that you want </p>
          ) : ""}
        </div>

        {/* Checkbox Options */}
        <div className="w-full mt-10 ml-1">
          <div className="bg-[#24232B] w-full text-white">
            <div className="flex flex-col space-y-4">
              {["uppercase", "lowercase", "numbers", "symbols"].map(
                (option) => (
                  <label key={option} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name={option}
                      checked={checkboxes[option]}
                      onChange={handleCheckboxChange}
                      className="checkbox border-white outline-0 rounded-[3px] [--chkbg:#A4FFAF] [--chkfg:black] checked:border-green-500"
                    />
                    <span
                      className={`${
                        checkboxes[option] ? "text-[#A4FFAF]" : "text-white"
                      } text-[12px] md:text-sm`}
                    >
                      Include {option.charAt(0).toUpperCase() + option.slice(1)}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>
        </div>

        {/* Strength Showcase */}
        <div className="flex items-center justify-between w-full bg-[#18171F] mt-5 p-3">
          <h1 className="font-medium text-gray-200 font-IBMPlexMono">
            Strength
          </h1>
          <p className="font-medium text-[#A4FFAF] font-IBMPlexMono text-[12px]">
            {getPasswordStrength()}
          </p>
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-6 font-bold ${
                  i < Object.values(checkboxes).filter(Boolean).length
                    ? "bg-orange-600 border-2 border-orange-600"
                    : "border-2 border-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="mt-5 flex items-center justify-center gap-2 bg-transparent border-2 border-[#A4FFAF] w-full p-2 text-[#A4FFAF] hover:bg-[#A4FFAF] hover:text-black"
        >
          <h1 className="font-bold font-IBMPlexMono">Generate</h1>
          <MdArrowRightAlt
            className="mt-1 font-bold font-IBMPlexMono"
            size={30}
          />
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
