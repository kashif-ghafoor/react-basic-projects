import "./App.css";
import Layout from "./components/layout";
import MonitorURL from "./components/monitorUrl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/:url" element={<MonitorURL />} />
      </Routes>
    </Router>
  );
}

export default App;
