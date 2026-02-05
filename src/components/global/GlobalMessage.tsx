"use client";

import { useGlobalMessage } from "@/store/global-message";
import { Alert, Snackbar } from "@mui/material";

export function GlobalMessage() {
  const { open, message, type, hide } = useGlobalMessage();

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={hide}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <Alert severity={type} onClose={hide} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
