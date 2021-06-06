import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import useStyles from './Styles';

function App() {
  const classes = useStyles();

  return (
    <>
      {/* sets base css */}
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon}/>
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum illum molestias sunt expedita dolores, deleniti tempore quia consequuntur sit culpa accusamus laudantium repellendus quos perspiciatis magnam ullam veniam asperiores.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={3} justify='center'>
                <Grid item>
                     <Button variant='contained' color='primary'>See Photos</Button>
                </Grid>
                <Grid item>
                     <Button variant='outlined' color='primary'>More Photos</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia 
                className={classes.cardMedia}
                image='https://source.unsplash.com/random'
                />
              </Card>
            </Grid>

          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
