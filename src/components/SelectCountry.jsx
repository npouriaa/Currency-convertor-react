import { Autocomplete, Grid, Skeleton, TextField } from "@mui/material";
import React, { useRef } from "react";
import useAxios from "./hooks/useAxios";

const SelectCountry = ({ value, setValue, label }) => {
  const inputRef = useRef();
  const [data, error, loading] = useAxios("https://restcountries.com/v3.1/all");

  if (loading) {
    return (
      <Grid item xs={12} md={3}>
        <Skeleton variant="rounded" height={60} />
      </Grid>
    );
  }

  if (error) {
    return "Something went wrong!";
  }

  const dataFilter = data.filter((item) => "currencies" in item);
  const dataCountries = dataFilter.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`;
  });

  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        disableClearable
        ref={inputRef}
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        options={dataCountries}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};

export default SelectCountry;
