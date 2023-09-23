import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import {
  Alert,
  Container,
  Grid,
  Link,
  Snackbar,
  Typography,
} from "@mui/material";
import InputAmount from "./components/InputAmount";
import SelectCountry from "./components/SelectCountry";
import SwitchCountry from "./components/SwitchCountry";
import { CurrencyContext } from "./context/CurrencyContext";
import { browserName } from "react-device-detect";

const App = () => {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useContext(CurrencyContext);
  const [open, setOpen] = useState(false);

  const boxStyles = {
    marginTop: "160px",
    background: "#fdfdfd",
    textAlign: "center",
    color: "#222",
    minHeight: "320px",
    borderRadius: 2,
    padding: "64px 32px",
    boxShadow: "0px 10px 100px 79px rgba(0,0,0,0.1);",
    position: "relative",
  };

  useEffect(() => {
    if (browserName === "Chrome") {
      setOpen(true);
    }
  }, []);

  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        color="warning"
        open={open}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Your'e currently using Chrome browser. If yore using chrome on Windows 
          OS, for better experience (display countries flags instead of countries
          codes ) I recommend you to install country flag fixer extension from{" "}
          <Link href="https://chrome.google.com/webstore/detail/country-flag-fixer/jhcpefjbhmbkgjgipkhndplfbhdecijh">
            here
          </Link>
          . Recommended browser for using this website is Firefox.
        </Alert>
      </Snackbar>
      <Typography variant="h5" sx={{ marginBottom: "32px" }}>
        Stay ahead with accurate conversions
      </Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry
          value={fromCurrency}
          setValue={setFromCurrency}
          label="From"
        />
        <SwitchCountry />
        <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
      </Grid>
    </Container>
  );
};

export default App;
