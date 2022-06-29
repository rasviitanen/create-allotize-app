import React, { useEffect, useState } from "react";
import { subscribe } from "allotize-js";
import { sectionStyle, rowStyle } from "../style/style";

const counterStyle = {
    fontSize: "3em",
    marginLeft: "0.5em",
};

export function Subscribe() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        subscribe(`counter`, (e) => {
            setCount(e.count);
        });

        async function sub() {
            const initial = await subscribe(`counter`, (e) => {
                setCount(e.count);
            });
            setCount(initial.count);
        }
        sub();
    }, []);

    return (
        <section style={sectionStyle}>
            <h5>Subscribe (subscribed to counter)</h5>
            <div style={rowStyle}>
                <span style={counterStyle}>{count}</span>
            </div>
        </section>
    );
}
