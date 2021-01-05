import React from "react";
import { useAllotizeState } from "allotize-react";

export function Stream() {
    const [allotize, setAllotize] = useAllotizeState({
        route: "myStream",
        persist: false,
        state: {
            data: "",
        }
    });

    const handleChange = (event) => {
      setAllotize({ data: event.target.value})
    }

    return (
      <div>
        <input type="text" value={allotize.data} onChange={handleChange} />
      </div>
    );
}