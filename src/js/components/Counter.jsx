import React from "react";
import { useAllotize } from "../hooks/allotize";
import { sectionStyle, columnStyle, rowStyle, btnStyle } from "../style/style";

const counterStyle = {
    fontSize: "3em",
    marginLeft: "0.5em",
};

export function Counter() {
    const [state, setState] = useAllotize({
        route: `counter`,
        data: {
            count: 0,
        },
    });

    const increment = () => {
        setState({
            ...state,
            count: state.count + 1,
        });
    };

    const decrement = () => {
        setState({
            ...state,
            count: state.count - 1,
        });
    };

    return (
        <section style={sectionStyle}>
            <h5>Counter</h5>
            <div style={rowStyle}>
                <div>
                    <div style={columnStyle}>
                        <button onClick={increment} style={btnStyle}>
                            ▲
                        </button>
                        <button onClick={decrement} style={btnStyle}>
                            ▼
                        </button>
                    </div>
                </div>
                <span style={counterStyle}>{state.count}</span>
            </div>
        </section>
    );
}
