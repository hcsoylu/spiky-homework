import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isFetched, setIsFetched] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (input === "") {
      setIsFetched(false);
    }
  }, [input]);

  useEffect(() => {
    setSelectedDay(0);
  }, [weatherData]);

  console.log("hey", process.env.REACT_API_KEY);

  const getWeather = async () => {
    setIsFetched(false);
    setLoading(true);
    const { data } = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${input}&key=${process.env.REACT_APP_API_KEY}`
    );
    setWeatherData(data);
    setIsFetched(true);
    setLoading(false);
  };

  return (
    <div className="App">
      <Header />
      <Search input={input} setInput={setInput} getWeather={getWeather} />
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Content
          input={input}
          setInput={setInput}
          weatherData={weatherData}
          setWeatherData={setWeatherData}
          isFetched={isFetched}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      )}
    </div>
  );
}

export default App;
