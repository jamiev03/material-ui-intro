import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const SavedCoins = ({ savedCoins, setSavedCoins, coins, coin }) => {
  const clearHandler = () => {
    setSavedCoins([]);
  };

  return (
    <>
    {savedCoins.length >= 1 ? ( <>
        <Typography style={{paddingTop: '2rem'}}variant="h5" align="center" paragraph >
        Favorite Coins
      </Typography>
        <Grid item>
          <Button variant="contained" color="primary" onClick={clearHandler}>
            clear
          </Button>
        </Grid>
        </>
      ) : (
        ""
      )}
      
      {savedCoins.map((item) => (
        <div key={item.id} style={{ display: "inline-block", padding: ".5rem" }}>
          {/* <h3>{item.name}</h3> */}
          <img src={item.image} alt={item.id} style={{ maxWidth: "60px", height: "auto" }} />
        </div>
      ))}
      
    </>
  );
};


export default SavedCoins;
