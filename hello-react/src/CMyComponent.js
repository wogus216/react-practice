import { Component } from "react";
import propTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; //비구조화
    return (
      <div>
        안녕하세요, 제이름은 {name}입니다. <br />
        children 값은 {children}입니다.
        <br></br>
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.propTypes = {
  name: propTypes.string,
  favoriteNumber: propTypes.number.isRequired,
};

export default MyComponent;
