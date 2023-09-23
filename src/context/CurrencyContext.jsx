import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyContextProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState("🇮🇷 IRR - Iran");
  const [toCurrency, setToCurrency] = useState("🇺🇸 USD - United States");
  const [firstAmount, setFirstAmount] = useState('');

  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
