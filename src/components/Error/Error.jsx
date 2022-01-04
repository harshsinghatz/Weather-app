import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles.js";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
const Error = ({ code }) => {
  const classes = useStyles();
  if (!code) return null;

  return (
    <>
      <Box className={classes.error}>
        {code === 404 ? (
          <>
            <Typography variant="h1">4</Typography>
            <WbSunnyIcon className={classes.icon} />
            <Typography variant="h1">4</Typography>
          </>
        ) : code === 1 ? (
          <h1>Location denied</h1>
        ) : (
          <h1>something went wrong</h1>
        )}
      </Box>
    </>
  );
};

export default Error;
