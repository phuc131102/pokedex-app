import React from "react";
import { Button } from "@mui/material";

function Search(prop) {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={prop.searchQuery}
        onChange={prop.handleSearchChange}
        style={
          prop.isMd
            ? {
                padding: "10px",
                borderRadius: "5px",
                width: "15%",
                border: "1px solid #ccc",
                fontSize: "1.2rem",
                marginRight: "10px",
              }
            : {
                padding: "10px",
                borderRadius: "5px",
                width: "80%",
                border: "1px solid #ccc",
                fontSize: "1.0rem",
                display: "block",
                marginBottom: "10px",
                margin: "auto",
              }
        }
      />
      <select
        value={prop.selectedType1}
        onChange={prop.handleTypeChange1}
        style={
          prop.isMd
            ? {
                padding: "10px",
                borderRadius: "5px",
                width: "10%",
                border: "1px solid #ccc",
                fontSize: "1.2rem",
                marginTop: "10px",
                marginRight: "10px",
              }
            : {
                padding: "10px",
                borderRadius: "5px",
                width: "35%",
                border: "1px solid #ccc",
                fontSize: "1.0rem",
                marginTop: "10px",
                marginRight: "10px",
              }
        }
      >
        <option value="">Filter Type 1</option>
        {prop.types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select
        value={prop.selectedType2}
        onChange={prop.handleTypeChange2}
        style={
          prop.isMd
            ? {
                padding: "10px",
                borderRadius: "5px",
                width: "10%",
                border: "1px solid #ccc",
                fontSize: "1.2rem",
                marginTop: "10px",
                marginRight: "10px",
              }
            : {
                padding: "10px",
                borderRadius: "5px",
                width: "35%",
                border: "1px solid #ccc",
                fontSize: "1.0rem",
                marginTop: "10px",
                marginRight: "10px",
              }
        }
      >
        <option value="">Filter Type 2</option>
        {prop.types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <Button
        sx={
          !prop.isMd
            ? {
                width: "20%",
                display: "block",
                margin: "auto",
                marginTop: "10px",
              }
            : null
        }
        onClick={prop.handleResetFilters}
        variant="contained"
      >
        Reset
      </Button>
    </div>
  );
}

export default Search;
