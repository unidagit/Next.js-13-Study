"use client";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (path: any) =>
  fetch(`https://rickandmortyapi.com/${path}`).then((res) => res.json());

function CoffeeList() {
  const coffeeLists = useSWR("api/character", fetcher);

  return (
    <>
      <h2>Client Fetching</h2>
      {coffeeLists?.data?.results?.map((item: any) => (
        <ul key={item.id}>
          <Link href={`/tea/${item.name}`}>
            <li>{item.name}</li>
          </Link>
        </ul>
      ))}
    </>
  );
}

export default CoffeeList;
