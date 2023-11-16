import React from "react";

const Home = ({ onButtonClick, inputValue, handleChange }) => {
  return (
    <>
      <div className="w-1/2 p-4 flex items-center justify-center">
        <div>
          <input
            type="text"
            id="locationInput"
            placeholder="Enter an API key"
            value={inputValue}
            onChange={handleChange}
            className="p-4 ml-4 text-xl placeholder-white text-white mx-auto rounded-md backdrop-blur-md transition duration-300 bg-[#00A9FF]/30 hover:bg-[#89CFF3]/80"
          />
          <button
            type="button"
            onClick={onButtonClick}
            className="p-4 ml-4 text-xl mx-auto rounded-md backdrop-blur-md transition duration-300 bg-[#00A9FF]/30 hover:bg-[#89CFF3]/80"
          >
            😊
          </button>
        </div>
      </div>

      <div className="w-1/2 bg-[#00A9FF]/20 p-4 rounded-3xl backdrop-blur-md text-white">
        <img
          src="public/weather/rainbow.png"
          className="max-w-2xl mx-auto"
          alt="rainbow"
        />
        <a
          href="https://home.openweathermap.org/api_keys"
          className="p-2 ml-4 mx-auto rounded-md backdrop-blur-md transition duration-300 bg-[#00A9FF]/30 hover:bg-[#89CFF3]/80"
        >
          Click for OpenWeather API Key
        </a>
        <a
          href="https://github.com/3r4y/WindWhisper"
          className="p-2 ml-4 mx-auto rounded-md backdrop-blur-md transition duration-300 bg-[#00A9FF]/30 hover:bg-[#89CFF3]/80"
        >
          GitHub
        </a>
      </div>
    </>
  );
};

export default Home;
