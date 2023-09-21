import React from "react";
import "./App.css";
import { Button, Container, Grid, Typography } from "@mui/material";
import InputAmount from "./components/InputAmount";
import SelectCountry from "./components/SelectCountry";
import SwitchCountry from "./components/SwitchCountry";

const App = () => {
  const boxStyles = {
    marginTop : '160px',
    background: "#fdfdfd",
    textAlign : 'center',
    color: '#222',
    minHeight : '320px',
    borderRadius : 2,
    padding : '64px 32px',
    boxShadow : '0px 10px 100px 79px rgba(0,0,0,0.1);',
    position : 'relative'
  }
  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant="h5" sx={{ marginBottom: "32px" }}>
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
