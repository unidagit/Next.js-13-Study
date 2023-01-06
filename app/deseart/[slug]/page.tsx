async function getDesearts() {
  const result = await fetch("https://rickandmortyapi.com/api/character");
  const lists = await result.json();
  return lists;
}

export async function generateStaticParams() {
  const desearts = await getDesearts();

  return desearts?.results.map((item: any) => ({
    slug: item?.name.replace(/\s+/g, "-").toLowerCase(),
  }));
}

export default function DeseartDetailpage({ params }: any) {
  return (
    <>
      <h2>디저트 메뉴는 {params.slug}</h2>
      <p>{params.name}</p>
    </>
  );
}
