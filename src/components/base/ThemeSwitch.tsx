"use client";

import { useThemeMode } from "@/store/useThemeMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, FormControlLabel, Switch } from "@mui/material";

export default function ThemeSwitch() {
  const { mode, toggleMode } = useThemeMode();

  return (
    <FormControlLabel
      control={<Switch checked={mode === "dark"} onChange={toggleMode} />}
      label={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </Box>
      }
    />
  );
}
