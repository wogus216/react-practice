import { Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Profiles from "./pages/Profiles";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홀</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
};

export default App;
