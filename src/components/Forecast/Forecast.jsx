import React from "react";
import { Box, Card, Typography, Grid } from "@material-ui/core";
import useStyles from "./styles.js";

//---------------Material UI icons---------------
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import StormIcon from "@mui/icons-material/Storm";
import CloudIcon from "@mui/icons-material/Cloud";
import AirIcon from "@mui/icons-material/Air";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

//---------------Helper Functions---------------
const getDateInfo = function () {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const changeDayFormat = function (day) {
    day = String(day);
    if (day.slice(-1) === "1") {
      return `${day}st`;
    }
    if (day.slice(-1) === "2") {
      return `${day}nd`;
    }
    if (day.slice(-1) === "3") {
      return `${day}rd`;
    }
    return `${day}th`;
  };
  const dateObj = new Date();
  const month = months[dateObj.getMonth()];
  const date = changeDayFormat(dateObj.getDate());
  const day = days[dateObj.getDay()];
  const hour = dateObj.getHours();
  return { month, date, day, hour };
};
const kelvinToCelcius = (kelvin) => (kelvin - 273.15).toFixed(1);

const Forecast = ({ weatherData }) => {
  //Styling
  const classes = useStyles();
  if (!Object.entries(weatherData).length) return null;

  //Destructuring Weather Data
  const { month, day, date, hour } = getDateInfo();
  const place = weatherData.name;
  const { humidity, pressure, temp, temp_min, temp_max } = weatherData.main;
  const { main } = weatherData.weather[0];
  const { speed: windSpeed } = weatherData.wind;

  return (
    <>
      <Box>
        <Card className={classes.card}>
          <Grid container className={classes.cardContent}>
            <Grid item xs={12} sm={5} className={classes.temperature}>
              <Typography className={classes.attribute} variant="h5">
                {day}
                {hour >= 6 && hour <= 18 ? (
                  <LightModeIcon />
                ) : (
                  <ModeNightIcon />
                )}
              </Typography>
              <Typography className={classes.attribute} variant="h6">
                <DateRangeIcon />
                {`${month} ${date}`}
              </Typography>
              <Typography
                className={classes.attribute}
                variant="h6"
                gutterBottom
              >
                <LocationCityIcon />
                {place}
              </Typography>
              <Typography className={classes.attribute} variant="h6">
                {main === "Clouds" ? (
                  <CloudIcon />
                ) : main === "Rain" ? (
                  <UmbrellaIcon />
                ) : main === "Extreme" ? (
                  <StormIcon />
                ) : main === "Snow" ? (
                  <AcUnitIcon />
                ) : (
                  <AirIcon />
                )}
                {main}
              </Typography>
              <Typography className={classes.attribute} variant="h6">
                <DeviceThermostatIcon />
                {kelvinToCelcius(temp)} C
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7} className={classes.climateInfo}>
              <div className={classes.climateParams}>
                <Typography
                  className={classes.attribute}
                  variant="h5"
                  gutterBottom
                >
                  Humidity
                </Typography>
                <Typography
                  className={classes.attribute}
                  variant="h5"
                  gutterBottom
                >
                  {humidity} %
                </Typography>
              </div>
              <div className={classes.climateParams}>
                <Typography
                  className={classes.attribute}
                  variant="h5"
                  gutterBottom
                >
                  Air Pressure
                </Typography>
                <Typography
                  className={classes.attribute}
                  variant="h5"
                  gutterBottom
                >
                  {pressure} mb
                </Typography>
              </div>
              <div className={classes.climateParams}>
                <Typography
                  className={classes.attribute}
                  variant="h5"
                  gutterBottom
                >
                  Max temperature
                </Typography>
                <Typography
                  className={classes.attribute}
                  variant="h5"
                  gutterBottom
                >
                  {kelvinToCelcius(temp_max)} C
                </Typography>
              </div>
              <div className={classes.climateParams}>
                <Typography
                  className={classes.attribute}
                  variant="h5"
                  gutterBottom
                >
                  Min temperature
                </Typography>
                <Typography
                  className={classes.attribute}
                  variant="h5"
                  gutterBottom
                >
                  {kelvinToCelcius(temp_min)} C
                </Typography>
              </div>

              <div className={classes.climateParams}>
                <Typography
                  className={classes.attribute}
                  variant="h5"
                  gutterBottom
                >
                  Wind speed
                </Typography>
                <Typography
                  className={classes.attribute}
                  variant="h5"
                  gutterBottom
                >
                  {windSpeed} m/s
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default Forecast;
