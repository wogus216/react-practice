import { Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "red",
  };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert">
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      ></Route>
      <Route path="/profiles/:username" component={Profile}></Route>
    </div>
  );
};

export default Profiles;
