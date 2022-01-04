import React, { useState } from "react";
import { Box, Button, InputBase, InputLabel } from "@material-ui/core";
import useStyles from "./styles.js";

const Search = ({ setCity }) => {
  const classes = useStyles();
  const [selectedCity, setSelectedCity] = useState("");

  const onCitySubmit = function (event) {
    event.preventDefault();
    setCity(selectedCity);
  };
  return (
    <form onSubmit={onCitySubmit}>
      <Box className={classes.search}>
        <InputLabel htmlFor="city-input" className={classes.inputLabel}>
          Enter the city name
        </InputLabel>
        <Box className={classes.inputItem}>
          <InputBase
            className={classes.input}
            autoFocus={true}
            id="city-input"
            placeholder="Type city name..."
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          />
          <Button type="submit" className={classes.btn}>
            Search
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Search;
