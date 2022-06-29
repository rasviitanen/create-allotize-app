import React from "react";
import { useAllotize } from "../hooks/allotize";
import { sectionStyle, rowStyle } from "../style/style";

export function Text() {
  const [state, setState] = useAllotize({
    route: `text`,
    config: {
      persist: false,
      throttleInterval: 500 /* Send at most half second */
    },
    data: {
      content: "", // initial state
    },
  });

  return (
    <section style={sectionStyle}>
      <h5>Live Text</h5>
      <div style={rowStyle}>
        <textarea
          value={state.content}
          onChange={(e) => setState({ ...state, content: e.target.value })}
        ></textarea>
      </div>
    </section>
  );
}
