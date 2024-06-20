import { Container } from "@mui/material";
import { createStyles, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((_theme) => createStyles({
  container: {
      height: '100%',
      overflow: 'visible',
      backgroundColor: "#BDBDBD",
      minHeight: 770,
      width: '100%',
  },    
}));

const ErrorPage = () => {
  const classes = useStyles();

    return(
      <Container className={classes.container}>
          dasadas
      </Container>
      );
}

// useEffect(() => {
//   searchChamps("Akali").then((response) => console.log(response))
//   champsArrays().then(response => console.log(response))
// },[])

export default ErrorPage;