import { use } from "react";

async function getLists() {
  const result = await fetch("https://rickandmortyapi.com/api/character", {
    cache: "no-store",
  });
  const lists = await result.json();
  return lists;
}

function TeaList() {
  const teaLists = use(getLists());

  return (
    <div>
      <h2>teaList</h2>
      {teaLists?.results?.map((item: any) => (
        <ul key={item.id}>
          <li>{item.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default TeaList;
