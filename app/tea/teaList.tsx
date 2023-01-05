import React from "react";
import { use } from "react";

async function getLists() {
  const { tea } = await import("../../data/data.json");
  return tea;
}

function TeaList() {
  const teaLists = use(getLists());

  return (
    <div>
      <h2>teaList</h2>
      {teaLists?.map((item: any) => (
        <ul key={item.id}>
          <li>{item.id}</li>
          <p>{item.description}</p>
        </ul>
      ))}
    </div>
  );
}

export default TeaList;
