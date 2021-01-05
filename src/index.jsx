import React from "react";
import ReactDOM from "react-dom";

import {Counter} from './components/Counter.jsx'
import {Stream} from './components/Stream.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
            <h3>Counter</h3>
            <Counter/>
            <h3>Stream</h3>
            <Stream/>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app"));