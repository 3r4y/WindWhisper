import { useState, useEffect } from "react";

const Weather = ({ apiKey }) => {
  const [apiData, setApiData] = useState({});
  const [inputValue, setInputValue] = useState("sweden");
  const [selectedState, setSelectedState] = useState("sweden");

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedState}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [selectedState, apiKey]);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = () => {
    setSelectedState(inputValue);
  };

  const kelvinToFahrenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div className="flex items-center justify-center w-full p-4 text-white">
      <div className="flex mx-auto">
        <input
          type="text"
          onChange={inputHandler}
          value={inputValue}
          className="p-4 ml-4 text-xl placeholder-white mx-auto rounded-md backdrop-blur-md transition duration-300 bg-[#00A9FF]/30 hover:bg-[#89CFF3]/80"
        />
        <button
          type="button"
          onClick={submitHandler}
          className="p-4 ml-4 text-xl placeholder-white mx-auto rounded-md backdrop-blur-md transition duration-300 bg-[#00A9FF]/30 hover:bg-[#89CFF3]/80"
        >
          🥶 Search
        </button>
      </div>
      <div className="w-1/2 bg-[#00A9FF]/30 p-4 rounded-3xl backdrop-blur-md">
        {apiData.main ? (
          <div>
            <img
              src={`public/weather/${apiData.weather[0].main}.png`}
              alt={`${apiData.weather[0].main} weather status icon`}
              className="max-w-xs"
            />
            <div>
              <h1 className="text-7xl">
                {kelvinToFahrenheit(apiData.main.temp)}&deg; C
              </h1>
              <h1 className="text-2xl">
                {apiData.name} - {apiData.weather[0].main}
              </h1>
            </div>
          </div>
        ) : (
          <h1>not found.</h1>
        )}
      </div>
    </div>
  );
};

export default Weather;
