import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Fallback Route - Handles all unknown paths */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
