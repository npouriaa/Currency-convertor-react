import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyContextProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState("🇮🇷 IRR - Iran");
  const [toCurrency, setToCurrency] = useState("🇺🇸 USD - United States");

  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
  };

  return (
    <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
