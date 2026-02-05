"use client";
import ApiIcon from "@mui/icons-material/Api";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FlagIcon from "@mui/icons-material/Flag";
import PolylineIcon from "@mui/icons-material/Polyline";
import StorageIcon from "@mui/icons-material/Storage";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import {
  Box,
  Chip,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const drawerWidth = 240;

const MenuItem = [
  { text: "Components", icon: StorageIcon },
  { text: "Component API", icon: ApiIcon },
  { text: "Customization", icon: PolylineIcon },
  { text: "How-to guides", icon: WorkspacePremiumIcon },
];

const Sidebar = () => {
  const [openSection, setOpenSection] = useState<string | null>(
    "getting-started",
  );

  const handleToggle = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "1px solid #e5e7eb",
        },
      }}>
      {/* Header & Logo Section */}
      <Box
        className="flex flex-row"
        sx={{ px: 1, py: 0.5, gap: 2, alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#0073E6">
            <path d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z" />
          </svg>
        </Box>

        {/* Version Selectors Simulation */}
        <Typography gutterBottom variant="body2" component="div">
          Material UI v7.3.7
        </Typography>
      </Box>

      <Divider />

      <List sx={{ p: 0, mt: 1 }}>
        {/* Getting Started - Collapsible */}
        <ListItem disablePadding sx={{ display: "block", px: "6px", py: 0 }}>
          <ListItemButton
            onClick={() => handleToggle("getting-started")}
            sx={{ px: "6px", py: 0.5, borderRadius: 1.5 }}>
            <FlagIcon
              sx={{ fontSize: 13, mr: 0.5 }}
              className="text-blue-500"
            />
            <ListItemText
              primary="Getting started"
              sx={{
                m: 0,
                "& .MuiTypography-root": {
                  fontSize: 13,
                },
              }}
            />
            {openSection === "getting-started" ? (
              <ExpandLess sx={{ fontSize: 13 }} />
            ) : (
              <ExpandMore sx={{ fontSize: 13 }} />
            )}
          </ListItemButton>

          <Collapse
            in={openSection === "getting-started"}
            timeout="auto"
            unmountOnExit>
            <List component="div" disablePadding>
              {["Overview", "Installation", "Usage"].map((text) => (
                <ListItemButton
                  key={text}
                  sx={{
                    px: "6px",
                    py: 0.5,
                    pl: 2,
                    borderRadius: 1.5,
                    "& .MuiTypography-root": {
                      fontSize: 11,
                    },
                  }}
                  component={Link}
                  href={`/material-ui/getting-started/${text.toLowerCase()}`}>
                  <ListItemText primary={text} sx={{ m: 0 }} />
                </ListItemButton>
              ))}
              <ListItemButton
                sx={{
                  px: "6px",
                  py: 0.5,
                  pl: 2,
                  borderRadius: 1.5,
                  "& .MuiTypography-root": {
                    fontSize: 11,
                  },
                }}
                component={Link}
                href="/material-ui/getting-started/mcp">
                <ListItemText primary="MCP" sx={{ m: 0 }} />
                <Chip
                  label="New"
                  size="small"
                  color="default"
                  sx={{ height: 18, fontSize: "0.65rem" }}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </ListItem>

        {/* Regular Items */}
        {MenuItem.map((menu) => (
          <ListItem key={menu.text} sx={{ px: "6px", py: 0 }}>
            <ListItemButton
              sx={{
                px: "6px",
                py: 0.5,
                borderRadius: 1.5,
                "& .MuiTypography-root": {
                  fontSize: 13,
                },
              }}>
              {menu.icon && (
                <menu.icon
                  sx={{ mr: 0.5, display: "flex", fontSize: 13 }}
                  className="text-blue-500"
                />
              )}
              <ListItemText primary={menu.text} sx={{ m: 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
