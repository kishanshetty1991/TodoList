import React, { Component } from "react";
import Imagy from "./ImageSlider";

export default class Header extends Component {
  state = {
    visible: true,
  };

  add(a, b) {
    return a + b;
  }
  sub(a, b) {
    return a - b;
  }

  visible = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render(props) {
    let slider = this.state.visible ? <Imagy /> : null;

    if (slider == null) {
      slider = <div>Display Nothing</div>;
    }

    const buttontext = this.state.visible ? "Hide" : "Show";

    return (
      <div>
        <header className="App-header">
          {slider}
          <button onClick={this.visible}> {buttontext}</button>

          <p>Welcome To React {this.props.title}</p>

          <div>
            {/* {this.props.myArr[0]} {this.props.myArr[1]}
            <br />*/}
            {this.add(10, 20)}
            <br />
            {this.sub(10, 20)}
            <br />
            {/*{JSON.stringify(this.props.myObj)}
            <br />
            {JSON.stringify(this.props.myObj2)}
            <br />*/}
          </div>
          <p>
            <br />
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}
