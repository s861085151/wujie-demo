import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import RanshuFinanceNode from './pages/RanshuFinanceNode';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<RanshuFinanceNode />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
