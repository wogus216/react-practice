import { Component } from "react";

class HistorySample extends Component {
  // 뒤로가기
  handlGoBack = () => {
    this.props.history.goBack();
  };

  //홈으로 이동
  handleGoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    //이것을 설정하고 나면 페이지에 변화가 생기려고 할 때마다 정말 나갈 것 인지를 질문함
    this.unblock = this.props.history.block("정말 떠나실 건가요?");
  }

  componentWillUnmount() {
    //컴포넌트가 언마운트 되면 질문을 멈춤
    if (this.unblock) {
      this.unblock();
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handlGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
