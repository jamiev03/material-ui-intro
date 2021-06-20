import "./App.css";
import React, { useState, useEffect } from "react";
import SavedCoins from "./components/SavedCoins";
import CoinList from "./components/CoinList";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import Container from "@material-ui/core/Container";
import useStyles from "./components/Styles";
import { TextField } from "@material-ui/core";
import Loading from './components/Loading';

const cryptoPrices =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=24&page=1&sparkline=false";

function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [savedCoins, setSavedCoins] = useState([]);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await fetch(cryptoPrices);
      const coins = await response.json();
      setCoins(coins);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const inputTextHandler = (event) => {
    setSearch(event.target.value);
  };

  const refreshCoins = () => {
    fetchCoins();
    setSearch("");
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

    if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Crypto Coins
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Crypto Coins
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Search TOP 100 Crypto Currencies
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <form
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                  onChange={inputTextHandler}
                >
                  <TextField
                    id="standard-basic"
                    label="Search coin"
                    value={search}
                  />
                </form>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={refreshCoins}
                  >
                    Refresh List
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <SavedCoins
                  savedCoins={savedCoins}
                  setSavedCoins={setSavedCoins}
                  coins={coins}
                />
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {filteredCoins.map((coin) => (
              <CoinList
                name={coin.name}
                symbol={coin.symbol}
                coins={coins}
                setCoins={setCoins}
                coin={coin}
                id={coin.id}
                key={coin.id}
                current_price={coin.current_price}
                image={coin.image}
                price_change={coin.price_change_percentage_24h}
                savedCoins={savedCoins}
                setSavedCoins={setSavedCoins}
              />
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </>

    // <>
    //   <h1>Crypto Currencies</h1>
    //   <button onClick={refreshCoins}>Refresh</button>
    //   <SavedCoins savedCoins={savedCoins} setSavedCoins={setSavedCoins} coins={coins}/>
    //   <form>
    //     <input type="text" placeholder="Search" onChange={inputTextHandler} />
    //   </form>
    //   {filteredCoins.map((coin) => (
    //     <CoinList
    //       name={coin.name}
    //       symbol={coin.symbol}
    //       coins={coins}
    //       setCoins={setCoins}
    //       coin={coin}
    //       id={coin.id}
    //       key={coin.id}
    //       savedCoins={savedCoins}
    //       setSavedCoins={setSavedCoins}
    //     />
    //   ))}
    // </>
  );
}

App.propTypes = {
  classes: PropTypes.any
};

export default App;
