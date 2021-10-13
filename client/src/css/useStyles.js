import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  sidebar: {
    flex: 1,
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
}));

export default useStyles;
