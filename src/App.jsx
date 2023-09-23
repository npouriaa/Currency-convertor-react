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
import axios from "axios";

const App = () => {
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

  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(CurrencyContext);

  const [open, setOpen] = useState(false);
  const [resultCurrency, setResultCurrency] = useState(0);

  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await axios.get(
          `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ye3V6iCO6hvjcFUsd7gy1zEyr7ZXCs74OBuXOjF7&base_currency=${codeFromCurrency}&currencies=${codeToCurrency}`
        );
        setResultCurrency(res.data.data[codeToCurrency]);
      } catch (err) {
        console.log(err);
      }
    };

    if (firstAmount) {
      fetchResult();
    }
  }, [firstAmount]);

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
          OS, for better user experience (display countries flags instead of
          countries codes ) I recommend you to install country flag fixer
          extension from{" "}
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
