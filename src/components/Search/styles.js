import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  inputLabel: {
    color: "#1e3d59",
    fontSize: "1.4rem",
  },
  search: {
    margin: "2rem 0",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
  },
  input: {
    backgroundColor: "#1e3d59",
    padding: "0.5rem 1rem",
    color: "#f3f5f9",
    borderRadius: "1rem",
    flex: "1",
    // minWidth: "%",
  },
  inputItem: {
    minWidth: "70%",
    display: "flex",
    gap: "1rem",
  },
  btn: {
    backgroundColor: "#1e3d59",
    color: "#f3f5f9",
    fontWeight: "bolder",
    "&:hover": {
      color: "#1e3d59",
    },
  },
}));
