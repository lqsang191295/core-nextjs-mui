import { SubMenuItem } from "@/data/menu";
import { Box } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon, { listItemIconClasses } from "@mui/material/ListItemIcon";
import ListItemText, { listItemTextClasses } from "@mui/material/ListItemText";
import { MouseEvent } from "react";

interface NavItemProps {
  item: SubMenuItem;
  level: number;
}

interface NavItemCollapseProps {
  item: SubMenuItem;
  level: number;
}

const NavItem = ({ item, level }: NavItemProps) => {
  const toggleCollapseItem = () => {};

  const handleClose = () => {};

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {};

  return (
    <>
      <ListItem key={item.pathName} disablePadding>
        <ListItemButton
          component={"div"}
          to={item.path}
          onClick={toggleCollapseItem}
          target={item.target ? item.target : undefined}
          selected={!item.items && window.location.pathname === item.path}
          sx={[
            // (theme) => ({
            //   p: theme.spacing("3.5px", 2),
            //   "&.Mui-selected": {
            //     [`& .${listItemTextClasses.primary}`]: {
            //       color: "primary.main",
            //     },
            //   },
            // }),
            !item.active && {
              [`& .${listItemTextClasses.primary}`]: {
                color: "text.disabled",
              },
              [`& .${listItemIconClasses.root}`]: {
                color: "text.disabled",
              },
            },
            // sidenavCollapsed && {
            //   flexDirection: "column",
            //   justifyContent: "flex-start",
            //   alignItems: "center",
            //   textAlign: "center",
            //   p: 1,
            // },
            // (!sidenavCollapsed || level !== 0) && {
            //   minWidth: 180,
            //   flexDirection: "row",
            //   justifyContent: "flex-start",
            //   alignItems: "center",
            //   textAlign: "left",
            // },
            // openPopperMenu && {
            //   backgroundColor: ({ vars }) =>
            //     level === 0
            //       ? cssVarRgba(vars.palette.primary.mainChannel, 0.36)
            //       : "action.hover",
            // },
          ]}>
          {item.icon && (
            <ListItemIcon
              sx={{
                "& .iconify": {
                  fontSize: 14,
                },
              }}></ListItemIcon>
          )}

          <Box
            sx={[
              {
                flex: 1,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              },
              level === 0 && {
                px: 1,
              },
            ]}>
            <ListItemText
              sx={[
                {
                  [`& .${listItemTextClasses.primary}`]: {
                    typography: "caption",
                    fontWeight: "medium",
                    whiteSpace: "nowrap",
                    lineHeight: 1.3,
                    color: level === 0 ? "text.primary" : "text.secondary",
                  },
                },
                // sidenavCollapsed && {
                //   [`& .${listItemTextClasses.primary}`]: {
                //     lineClamp: 1,
                //     wordBreak: "break-all",
                //     whiteSpace: "normal",
                //   },
                // },
              ]}>
              {item.name}
            </ListItemText>
          </Box>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default NavItem;
