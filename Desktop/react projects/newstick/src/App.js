import React, { Component } from "react";
import "./App.css";
// import Header from "./Header.js";
// import { Body } from "./Body.js";
//import { Counter } from "./Counter.js";
//import MyForm from "./MyForm.js";
//import ValidationForm from "./ValidationForm.js";
//import RandomUser from "./Randomuser";
import TodoList from "./TodoList";
class App extends Component {
  // let myObj2 = { a: "Raju", b: "GentleMan" }
  // let myArr = ["Kishan", "Shetty"];
  state = {
    visible: true,
  };
  visible = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    // if (!this.state.visible) {
    //   counter = <div>Display Nothing</div>;
    // }

    // const buttontext = this.state.visible ? "Hide" : "Show";
    return (
      // <div className="App">
      //   {{   <Header
      //     title="Hello from prop"
      //     // myArr={myArr}
      //     // myObj={{
      //     //   a: 5,
      //     //   b: 6,
      //     // }}
      //     // this.myObj2={myObj2}
      //   />
      //   <Body
      //     text="I am hot"
      //     text2="But I am Cool Too"
      //     myFunction={(a, b) => {
      //       return a + b;
      //     }}
      //     myFunction2={(a, b) => {
      //       return a - b;
      //     }}
      //   />}
      //   {/*{this.state.visible ? <Counter counter={0} /> : null}}
      //   <div className={this.state.visible ? "visible" : "hidden"}>
      //     {/*<div style={this.state.visible ? {} : { display: "none" }}>*/}
      //   //   <Counter counter={0} />
      //   // </div>
      //   // {/*<Counter />*/}
      //   // <button onClick={this.visible}> {buttontext} </button>

      //   {/* // <Counter counter={10} />*/*/}}
      <div className="App">
        <TodoList />
      </div>
    );
  }
}
export default App;
