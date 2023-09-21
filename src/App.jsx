import React from "react";
import "./App.css";
import { Button, Container, Grid, Typography } from "@mui/material";
import InputAmount from "./components/InputAmount";
import SelectCountry from "./components/SelectCountry";
import SwitchCountry from "./components/SwitchCountry";

const App = () => {
  return (
    <Container maxWidth="md" sx={{ background: "#fdfdfd" }}>
      <Typography variant="h5" sx={{ marginTop: "32px" }}>
        Stay ahead with accurate conversions
      </Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry />
        <SwitchCountry />
        <SelectCountry />
      </Grid>
    </Container>
  );
};

export default App;
