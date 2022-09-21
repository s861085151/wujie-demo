import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import InsightDevops from './pages/InsightDevops';
import RanshuFinanceNode from './pages/RanshuFinanceNode';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/insight-devops" element={<InsightDevops />} />
          <Route exact path="/ranshu-finance-node" element={<RanshuFinanceNode />} />
          <Route exact path="/passport" element={<RanshuFinanceNode />} />
          <Route path="*" element={<div>aaa</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
