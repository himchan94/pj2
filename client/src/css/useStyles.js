import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100vh",
    width: "100vw",
  },
  sidebar: {
    flex: "1",
    backgroundColor: "#BEBEBE",
    padding: "15px",
  },
  page: {
    flex: "4",
    display: "flex",
  },
  imagepage: {
    flexGrow: "1",
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
  dicomimg: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
