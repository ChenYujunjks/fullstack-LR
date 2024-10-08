import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login.tsx";
import Register from "./Register.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
