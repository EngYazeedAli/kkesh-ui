import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Components from "../pages/Components";
import Installation from "../pages/Installation";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<Components />} />
      <Route path="/installation" element={<Installation />} />
    </Routes>
  );
}

export default AppRoutes;
