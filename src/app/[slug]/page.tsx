"use client";
import { getMenuTitle } from "@/data/menu";
import { useSidebarStore } from "@/store/useSidebarStore";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { usePathname } from "next/navigation";

export default function Page() {
  const toggle = useSidebarStore((s) => s.toggle);
  const pathname = usePathname();
  const title = getMenuTitle(pathname);

  return (
    <div>
      <IconButton onClick={toggle}>
        <MenuIcon />
      </IconButton>
      <h1>{title}</h1>
    </div>
  );
}
