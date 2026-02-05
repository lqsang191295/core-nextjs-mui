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
  const [openSection, setOpenSection] = useState<string | null>(
    "getting-started",
  );

  const handleToggle = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
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
      {/* Header */}
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
        {MenuItem.map((item) => (
          <Box key={item.text}>
            {/* Mục chính */}
            <ListItem
              disablePadding
              sx={{ display: "block", px: "6px", py: 0 }}>
              <ListItemButton
                component={item.link ? Link : "div"}
                href={item.link || "#"}
                onClick={() =>
                  item.SubMenu && handleToggle(item.id || item.text)
                }
                sx={{ py: 0.5, px: 1, borderRadius: 1.5 }}>
                {item.icon && (
                  <item.icon sx={{ fontSize: 13, mr: 1, color: "#1976d2" }} />
                )}
                <ListItemText
                  primary={item.text}
                  sx={{
                    m: 0,
                    "& .MuiTypography-root": {
                      fontSize: 13,
                    },
                  }}
                />
                {item.SubMenu &&
                  (openSection === item.id ? (
                    <ExpandLess sx={{ fontSize: 13 }} />
                  ) : (
                    <ExpandMore sx={{ fontSize: 13 }} />
                  ))}
              </ListItemButton>
            </ListItem>

            {/* Mục con (nếu có) */}
            {item.SubMenu && (
              <Collapse
                in={openSection === item.id}
                timeout="auto"
                unmountOnExit
                sx={{ px: "6px" }}>
                <List component="div" disablePadding sx={{ p: 0, pl: 2 }}>
                  {item.SubMenu.map((sub) => (
                    <ListItemButton
                      key={sub.text}
                      component={Link}
                      href={sub.link}
                      sx={{ py: 0.3, borderRadius: 1.5 }}>
                      {sub.icon && (
                        <sub.icon
                          sx={{ fontSize: 12, mr: 0.75, color: "#1976d2" }}
                        />
                      )}
                      <ListItemText
                        primary={sub.text}
                        sx={{
                          m: 0,
                          "& .MuiTypography-root": {
                            fontSize: 12,
                          },
                        }}
                      />
                      {sub.badge && (
                        <Chip
                          label={sub.badge}
                          size="small"
                          sx={{ height: 16, fontSize: 8 }}
                          color="default"
                        />
                      )}
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
