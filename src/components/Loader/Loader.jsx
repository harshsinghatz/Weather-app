import React from "react";
import useStyles from "./styles.js";
import { Typography } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loading}>
      <CircularProgress />
      <Typography variant="h5">Loading...</Typography>
    </div>
  );
};

export default Loader;
