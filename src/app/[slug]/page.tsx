import sitemap from "@/data/menu";

export default function Page({ params }: { params: { slug: string } }) {
  const item = sitemap[0].items.find(
    (x) => x.path?.replace("/", "") === params.slug,
  );

  return (
    <div>
      <h1>{item?.name ?? "Not Found"}</h1>
    </div>
  );
}
