import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    //props에 있는 값을 state에 넣을 때 사용하는 메서드
    //마운트 과정에서도 호출되며, 업데이트 하기 전에도 호출
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    //컴포넌트가 웹 브라우저상에서 나타난 후 호출하는 메서드
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //컴포넌트가 리렌더링 해야 할지 말아야 할지 결정하는 메서드
    //true 시 진행되고, false시 중단
    console.log("shouldComponentUpdate", nextProps, nextState);
    //숫자의 마지막 자리가 4면 리렌더링 하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    //컴포넌트가 웹 브라우저 상에서 사라지기 전에 호출
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
    console.log("getSnapshotBeforUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상:", snapshot);
    }
  }

  render() {
    //유일한 필수 메서드
    console.log("render");
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
export default LifeCycleSample;
