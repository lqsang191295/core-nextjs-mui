"use client";
import { useGlobalLoading } from "@/store/global-loading";
import { Backdrop, CircularProgress, Typography } from "@mui/material";

export default function GlobalLoading() {
  const { open, message } = useGlobalLoading();

  return (
    <Backdrop
      open={open}
      sx={{ zIndex: 9999, color: "#fff", flexDirection: "column" }}>
      <CircularProgress color="inherit" />
      <Typography sx={{ mt: 2 }}>{message}</Typography>
    </Backdrop>
  );
}
