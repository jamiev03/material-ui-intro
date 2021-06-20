import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useStyles from "./Styles";

const Coin = ({
  name,
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

  const deleteHandler = () => {
    setCoins(coins.filter((el) => el.id !== coin.id));
  };

  const addHandler = (e) => {
    e.preventDefault();
    setSavedCoins([
      ...savedCoins,
      { name: coin.name, id: coin.id, image: coin.image },
    ]);
    setCoins(coins.filter((el) => el.id !== coin.id));
  };

  return (
    // <div key={id}>
    //   <h1>{name}</h1>
    //   <button onClick={addHandler}>Add</button>
    //   <button type='submit' onClick={deleteHandler}>Remove</button>
    // </div>

    <>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        style={{ width: "80%", margin: "0 auto" }}
        title={name}
      />
      <CardContent className={classes.cardContent}>
        <Typography
          style={{ fontWeight: "600" }}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {name}
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5" style={{ paddingRight: ".6rem" }}>
            {current_price}
          </Typography>

          {price_change < 0 ? (
            <Typography style={{ color: "red" }}>
              {Math.round(price_change * 100) / 100}%
            </Typography>
          ) : (
            <Typography style={{ color: "green" }}>
              {Math.round(price_change * 100) / 100}%
            </Typography>
          )}
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={addHandler}
        >
          Add
        </Button>
        <Button
          color="primary"
          size="small"
          onClick={deleteHandler}
          type="submit"
        >
          Remove
        </Button>
      </CardActions>
    </>
  );
};

export default Coin;
