import "./App.css";
import { Component } from "react";

import ValidationSample from "./components/ValidationSample";
import ScrollBox from "./components/ScrollBox";
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨밑으로
        </button>
      </div>
    );
  }
}

export default App;
