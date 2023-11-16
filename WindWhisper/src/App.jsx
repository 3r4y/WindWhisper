/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import Weather from "./pages/weather";
import Home from "./pages/home";

function App() {
  const maxLength = 32; // Max karakter sayısı
  const [inputValue, setInputValue] = useState("");
  const [showWeather, setShowWeather] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    // Max length kontrolü
    if (value.length <= maxLength) {
      setInputValue(value);
    } else {
      alert(`Maximum ${maxLength} karaktere ulaşıldı!`);
    }
  };
  const handleButtonClick = () => {
    // Butona tıklandığında showWeather state'ini tersine çevirir
    setShowWeather((prevShowWeather) => !prevShowWeather);
  };
  return (
    <>
      <div className="font-['Feather']">
        <div className="flex m-16">
          {showWeather ? (
            <Weather apiKey={inputValue} />
          ) : (
            <Home
              onButtonClick={handleButtonClick}
              inputValue={inputValue}
              handleChange={handleChange}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
