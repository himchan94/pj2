import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  sidebar: {
    flex: 1,
    backgroundColor: "#BEBEBE",
    padding: "15px",
    maxHeight: "100vh",
  },
  page: {
    flex: 4,
  },
  imagepage: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageinput: {
    display: "none",
  },

  sideComponnent: {
    marginTop: "10px",
  },
}));

export default useStyles;
