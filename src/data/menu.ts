import ApiIcon from "@mui/icons-material/Api";
import FlagIcon from "@mui/icons-material/Flag";
import PolylineIcon from "@mui/icons-material/Polyline";
import StorageIcon from "@mui/icons-material/Storage";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export const MenuItemData = [
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

export function getMenuTitle(pathname: string): string {
  for (const menu of MenuItemData) {
    // menu có link trực tiếp
    if ("link" in menu && menu.link === pathname) {
      return menu.text;
    }

    // menu có submenu
    if (menu.SubMenu) {
      const sub = menu.SubMenu.find((s) => s.link === pathname);
      if (sub) return sub.text;
    }
  }

  return "App";
}
