"use client";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ApiIcon from "@mui/icons-material/Api";
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
import { usePathname } from "next/navigation";
import { useState } from "react";

const drawerWidth = 240;

const MenuItem = [
  {
    text: "Getting started",
    icon: FlagIcon,
    id: "getting-started",
    SubMenu: [
      { text: "Overview", link: "/getting-started/overview", icon: FlagIcon },
      { text: "Installation", link: "/getting-started/installation" },
      { text: "Usage", link: "/getting-started/usage" },
      { text: "MCP", link: "/getting-started/mcp", badge: "New" },
    ],
  },
  { text: "Components", icon: StorageIcon, link: "/components" },
  { text: "Component API", icon: ApiIcon, link: "/components-api" },
  { text: "Customization", icon: PolylineIcon, link: "/customization" },
  { text: "How-to guides", icon: WorkspacePremiumIcon, link: "/how-to-guides" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(
    "getting-started",
  );

  const handleToggle = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  // Hàm helper để check xem link có đang active không
  const isActive = (path: string) => pathname === path;

  // Style chung cho text
  const textStyle = (size: number, active: boolean) => ({
    m: 0,
    "& .MuiTypography-root": {
      fontSize: size,
      fontWeight: active ? 600 : 400,
      color: active ? "#1976d2" : "inherit",
    },
  });

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
      <Box
        sx={{ px: 2, py: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="body2" fontWeight="bold">
          Material UI v7.3.7
        </Typography>
      </Box>
      <Divider />

      <List sx={{ px: "6px", mt: 1 }}>
        {MenuItem.map((item) => {
          const isParentActive = item.link && isActive(item.link);

          return (
            <Box key={item.text}>
              <ListItem disablePadding sx={{ display: "block", mb: 0.5 }}>
                <ListItemButton
                  component={item.link ? Link : "div"}
                  href={item.link || "#"}
                  onClick={() =>
                    item.SubMenu && handleToggle(item.id || item.text)
                  }
                  sx={{
                    py: 0.5,
                    px: 1,
                    borderRadius: 1.5,
                    "&.Mui-selected": { bgcolor: "rgba(25, 118, 210, 0.08)" },
                  }}>
                  {item.icon && (
                    <item.icon
                      sx={{
                        fontSize: 13,
                        mr: 1,
                        color: isParentActive ? "#1976d2" : "#6b7280",
                      }}
                    />
                  )}
                  <ListItemText
                    primary={item.text}
                    sx={textStyle(13, !!isParentActive)}
                  />
                  {item.SubMenu &&
                    (openSection === item.id ? (
                      <ExpandLess sx={{ fontSize: 13 }} />
                    ) : (
                      <ExpandMore sx={{ fontSize: 13 }} />
                    ))}
                </ListItemButton>
              </ListItem>

              {item.SubMenu && (
                <Collapse
                  in={openSection === item.id}
                  timeout="auto"
                  unmountOnExit>
                  <List component="div" disablePadding sx={{ pl: 2.5 }}>
                    {item.SubMenu.map((sub) => {
                      const isSubActive = isActive(sub.link);
                      return (
                        <ListItemButton
                          key={sub.text}
                          component={Link}
                          href={sub.link}
                          selected={isSubActive}
                          sx={{
                            py: 0.3,
                            mb: 0.3,
                            borderRadius: 1.5,
                            "&.Mui-selected": {
                              bgcolor: "transparent",
                              "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
                            },
                          }}>
                          {sub.icon && (
                            <sub.icon
                              sx={{
                                fontSize: 12,
                                mr: 1,
                                color: isSubActive ? "#1976d2" : "#6b7280",
                              }}
                            />
                          )}
                          <ListItemText
                            primary={sub.text}
                            sx={textStyle(12, isSubActive)}
                          />
                          {sub.badge && (
                            <Chip
                              label={sub.badge}
                              size="small"
                              color="primary"
                              sx={{ height: 16, fontSize: 9 }}
                            />
                          )}
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
