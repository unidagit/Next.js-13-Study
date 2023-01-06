import CoffeeList from "./coffeeList";
import { Suspense } from "react";

export default function Coffepage() {
  return (
    <div>
      <p>coffePage CSR방식으로 데이터를 가져옵니다.</p>
      <Suspense fallback={<p>Loading feed...</p>}>
        <CoffeeList />
      </Suspense>
    </div>
  );
}
