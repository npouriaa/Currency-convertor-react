import { Autocomplete, Grid, TextField } from "@mui/material";
import React from "react";

const SelectCountry = () => {
  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value="option1"
        options={["option1", "option2"]}
        renderInput={(params) => <TextField {...params} label="from" />}
      />
    </Grid>
  );
};

export default SelectCountry;
