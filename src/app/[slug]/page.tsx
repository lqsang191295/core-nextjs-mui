"use client";
import sitemap from "@/data/menu";
import { useSidebarStore } from "@/store/useSidebarStore";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

export default function Page({ params }: { params: { slug: string } }) {
  const item = sitemap[0].items.find(
    (x) => x.path?.replace("/", "") === params.slug,
  );
  const toggle = useSidebarStore((s) => s.toggle);

  return (
    <div>
      <h1>{item?.name ?? "Not Found"}</h1>
      <IconButton onClick={toggle}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}
