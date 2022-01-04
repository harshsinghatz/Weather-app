import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <WbSunnyIcon className={classes.icon} />
        <Typography className={classes.title} variant="h4">
          Weather app
        </Typography>
      </AppBar>
    </>
  );
};

export default Header;
