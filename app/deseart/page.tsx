import Link from "next/link";
import { use } from "react";

async function getDeseartList() {
  const result = await fetch("https://rickandmortyapi.com/api/character");
  const lists = await result.json();
  return lists;
}

export default function DeseartPage() {
  const deseartLists = use(getDeseartList());

  return (
    <>
      <p>deseartPage SSG 방식으로 데이터 가져옵니다</p>
      <h2>getStaticPaths and getStaticProps</h2>
      {deseartLists?.results.map((item) => (
        <ul key={item.id}>
          <Link
            href={`/deseart/${item.name}`.replace(/\s+/g, "-").toLowerCase()}
          >
            <li>{item.name}</li>
          </Link>
        </ul>
      ))}
    </>
  );
}
