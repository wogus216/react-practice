import './App.css';
import Counter from './component/Counter';
import Header from './component/Header';
import Auth from './component/Auth';
import { useSelector } from 'react-redux';

function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  useSelector((state) => console.log('state', state));
  return (
    <div className="App">
      <h2></h2>
      <Header />
      {!auth && <Auth />}

      <Counter />
    </div>
  );
}

export default App;
