import React from "react";
import { useAllotizeState } from "allotize-react";

export function Counter() {
    const [allotize, setAllotize] = useAllotizeState({
        route: "myCounter",
        state: {
            count: 0,
        }
    });

    return (
      <div>
        {allotize.count}
        <button onClick={() => setAllotize({...allotize, count: allotize.count += 1})}>+</button>
        <button onClick={() => setAllotize({...allotize, count: allotize.count -= 1})}>-</button>
      </div>
    );
}