import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import "./styles/app.scss";
import Home from "./component/Home";

import Enroll from "./component/Enroll";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
    </Router>
  );
}

export default App;
