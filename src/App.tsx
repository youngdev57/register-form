import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/register/RegisterPage";
import RegisterSuccessPage from "./pages/register/RegisterSuccessPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register/step1" />} />
      <Route path="/register" element={<Navigate to="/register/step1" />} />

      <Route
        path="/register/:pageKey"
        element={<RegisterPage></RegisterPage>}
      />
      <Route
        path="/register/success"
        element={<RegisterSuccessPage></RegisterSuccessPage>}
      />
    </Routes>
  );
}

export default App;
