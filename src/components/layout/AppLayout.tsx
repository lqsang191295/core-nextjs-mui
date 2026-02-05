"use client";

import { useSidebarStore } from "@/store/useSidebarStore";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { open } = useSidebarStore();

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: !isMobile && open ? `${0}px` : 0,
          transition: "margin 0.25s",
          height: "100vh",
        }}>
        {children}
      </Box>
    </Box>
  );
}
