import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  temperature: {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),url(https://images.unsplash.com/photo-1584266463340-53b684c6ee9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "15rem",
    minWidth: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "1rem",
    color: "#f3f5f9",
  },
  card: {
    padding: "0 !important",
  },
  cardContent: {
    display: "flex",
  },
  climateInfo: {
    flex: 1,
    padding: "1rem",
  },
  climateParams: {
    display: "flex",
    justifyContent: "space-between",
  },
  attribute: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
}));
