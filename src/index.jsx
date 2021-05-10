import React from "react";
import ReactDOM from "react-dom";

import {Counter} from './components/Counter.jsx'
import {Stream} from './components/Stream.jsx'
import {TraceList} from './components/TraceList.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TraceList/>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app"));