import React from "react";
import Coin from "./Coin";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import useStyles from "./Styles";

const CoinList = ({
  name,
  symbol,
  coins,
  setCoins,
  coin,
  id,
  savedCoins,
  setSavedCoins,
  current_price,
  image,
  price_change,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid item key={coin} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <Coin
            name={name}
            symbol={symbol}
            coins={coins}
            setCoins={setCoins}
            coin={coin}
            key={id}
            savedCoins={savedCoins}
            setSavedCoins={setSavedCoins}
            current_price={current_price}
            image={coin.image}
            price_change={coin.price_change_percentage_24h}
          />
        </Card>
      </Grid>
    </>
  );
};

export default CoinList;
