import React, { Component } from "react"; //added {Component}//
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import "./styles.css";
//remove the person and id property
const renderNameTag = (name) => <NameTag name={name} key={name} />;
//change from functional to stateful component-changed const to class//
class App extends Component {
  //add state with an object of names array to keep track of changing name tag data//
  state = { names: ["Jody", "Kristy", "Miriam", "Monica", "Stephanie"] };
  //render method required for class based component//
  render() {
    const NameTagElements = this.state.names.map(renderNameTag);
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        {NameTagElements}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
