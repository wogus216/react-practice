import "./App.css";
import { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  render() {
    return (
      <MyComponent name="react" favoriteNumber={3}>
        권재현
      </MyComponent>
    );
  }
}

export default App;
