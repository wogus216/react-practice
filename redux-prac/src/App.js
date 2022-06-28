import { BrowserRouter as Router, Route } from 'react-router-dom';
import Close from './close';
import Inicis from './nicis';

function App() {
  return (
    <Router>
      <Route exact path="/" component={() => <Inicis />} />
      <Route exact path="/Close" component={() => <Close />} />
    </Router>
  );
}

export default App;
