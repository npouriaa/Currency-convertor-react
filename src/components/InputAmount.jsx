import { Grid, InputAdornment, TextField } from "@mui/material";
import React, { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

const InputAmount = () => {
  const { firstAmount, setFirstAmount } = useContext(CurrencyContext);
  return (
    <Grid item xs={12} md>
      <TextField
        onChange={(e) => setFirstAmount(e.target.value)}
        value={firstAmount}
        label="Amount"
        fullWidth
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default InputAmount;
