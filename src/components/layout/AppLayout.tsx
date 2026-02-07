"use client";

import { getMenuTitle } from "@/data/menu";
import { createAppTheme } from "@/lib/theme";
import { useSidebarStore } from "@/store/useSidebarStore";
import { useThemeMode } from "@/store/useThemeMode";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { usePathname } from "next/navigation";
import HeadMetadata from "../base/HeadMetadata";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { open } = useSidebarStore();
  const pathname = usePathname();
  const title = getMenuTitle(pathname);
  const { mode } = useThemeMode();
  const themeApp = createAppTheme(mode);

  return (
    <ThemeProvider theme={themeApp}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <HeadMetadata title={title} />

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
    </ThemeProvider>
  );
}
