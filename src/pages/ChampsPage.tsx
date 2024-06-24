import { Container } from "@mui/material";
import { createStyles, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => createStyles({
  container: {
      height: '100%',
      overflow: 'visible',
      backgroundColor: "#BDBDBD",
      minHeight: 770,
      width: '100%',
      color: '#f44336'
  },    
}));

const ChampsPage = () => {
  const classes = useStyles();

    return(
      <Container className={classes.container}>
          dasadas
      </Container>
      );
}

export default ChampsPage;