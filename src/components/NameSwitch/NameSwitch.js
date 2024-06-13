import React, { useState } from "react";
import { Switch, Box, Typography, FormControlLabel } from "@mui/material";
import { styled } from "@mui/system";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        content: '"JPN"',
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: 12,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: '"ENG"',
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: 12,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

function NameSwitch(prop) {
  const [checked, setChecked] = useState(() => {
    const saved = localStorage.getItem("showJapaneseName");
    return saved !== null ? JSON.parse(saved) : false;
  });

  const handleChange = (event) => {
    setChecked(event.target.checked);
    localStorage.setItem(
      "showJapaneseName",
      JSON.stringify(event.target.checked)
    );
    prop.onChange(event.target.checked);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {prop.isMd && (
        <Typography variant="body1" sx={{ marginRight: 2 }}>
          Switch Name Language
        </Typography>
      )}
      <FormControlLabel
        control={<CustomSwitch checked={checked} onChange={handleChange} />}
        label=""
      />
    </Box>
  );
}

export default NameSwitch;
