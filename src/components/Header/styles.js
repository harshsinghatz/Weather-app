import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  header: {
    color: "#f3f5f9",
    background: "#1e3d59",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem",
  },
  icon: {
    color: "#ff6e40",
    fontSize: "2rem",
  },
  title: {
    fontWeight: "lighter",
  },
}));
