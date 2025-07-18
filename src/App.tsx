import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/register/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register/step1" />} />
      <Route path="/register" element={<Navigate to="/register/step1" />} />

      <Route path="/register/:step" element={<RegisterPage></RegisterPage>} />
      <Route path="/register/success" element={<div>가입완료</div>} />
    </Routes>
  );
}

export default App;
