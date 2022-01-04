import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, CssBaseline } from "@material-ui/core";
////---------------Components---------------
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Forecast from "./components/Forecast/Forecast";
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";

// const appId = "5471d78d3a3e39d987cc643c16249d69";
// const baseUrl = "https://api.openweathermap.org/data/2.5/";
const appId = process.env.React_App_API_KEY;
const baseUrl = process.env.React_App_BASE_URL;
const getCoordinates = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [validSearch, setValidSearch] = useState(true);
  const [errorCode, setErrorCode] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        if (!city) return;
        setLoading(true);
        const url = `${baseUrl}weather?q=${city}&appid=${appId}`;
        const res = await axios.get(url);
        setWeatherData(res.data);
        setValidSearch(true);
        setLoading(false);
      } catch (err) {
        setValidSearch(false);
        setLoading(false);
        setErrorCode(err.response.status);
      }
    })();
  }, [city]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const geoData = await getCoordinates();
        const { latitude: lat, longitude: lon } = geoData.coords;
        const url = `${baseUrl}weather?lat=${lat}&lon=${lon}&appid=${appId}`;
        const res = await axios.get(url);
        setWeatherData(res.data);
        setValidSearch(true);
        setLoading(false);
      } catch (err) {
        setValidSearch(false);
        setLoading(false);
        setErrorCode(err.code);
      }
    })();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Search setCity={setCity} />
      {!loading ? (
        <>
          <Container>
            {validSearch ? (
              <Forecast weatherData={weatherData} />
            ) : (
              <Error code={errorCode} />
            )}
          </Container>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
