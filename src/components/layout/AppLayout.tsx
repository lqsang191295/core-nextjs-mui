"use client";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ p: 0, height: "100vh", width: "100vw", overflow: "hidden" }}
        className="flex-1">
        {children}
      </Box>
    </Box>
  );
}
