import React, {useState} from "react";
import { useAllotizeState } from "allotize-react";
import {report} from "./report.js";

const backTraceStyle = {
    background: "#f3f3f3",
}

const frameStyle = {
    background: "#830383",
    padding: "4px",
    display: "block",
    // margin: "14px",
}

const tableStyle = {
    tableLayout: "fixed",
    width: "100%",
    fontFamily: "Fira Code, monospace",
    wordBreak: "break-word",
};

export function TraceList() {
    const [threads, setThreads] = useState([]);
    const [regEx, setRegEx] = useState('');

    let recording = report;
    const [traces, setTraces] = useState(recording);

    const handleRegExChange = (e) => {
        setRegEx(e.target.value);
    }

    Object.entries(traces).forEach(([time, trace]) => {
        trace.forEach((threadTrace) => {
            if (!threads.includes(threadTrace.thread_name)) {
                setThreads(threads.concat([threadTrace.thread_name]))
            }
        })
    });

    const header = threads.map((thread) => {
        return (
            <th key={thread}>{thread}</th>
        );
    });

    function formatFrames(frames) {
        let n = 0;
        const frameView = frames.map((frame) => {
            if (!frame.match(regEx)) {
                return;
            }

            if (n == 0) {
                n += 1;
                return <span style={frameStyle}> {frame} </span>;
            } else {
                return <span style={frameStyle}>{frame}</span>;
            }
        });
        return (
            <>
            {frameView}
            </>
        );
    }

    const traceView = Object.entries(traces).map(([time, trace]) => {
        return (
            <tr>
                <td>
                    {`${time}ms`}
                </td>
                {
                    threads.map((thread) => {
                        return trace.map((individualTrace) => {
                            if (individualTrace.thread_name == thread) {
                                return (<td>{formatFrames(individualTrace.frames)}</td>);
                            }
                        });
                    })
                }
            </tr>
        );
    })

    return (
      <>
        <input type="text" placeholder="regex" value={regEx} onChange={handleRegExChange} />
        <table style={tableStyle}>
            <thead>
            <tr>
                <th>Time</th>
                {header}
            </tr>
            </thead>
            <tbody>
            {traceView}
            </tbody>
        </table>
      </>
    );
}
