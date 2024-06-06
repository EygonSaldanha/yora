import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AttendeeList } from "./components/attendee-list";
import { Eventos } from "./pages/eventos/eventos";

const YoraRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={AttendeeList} path="/participantes" />
        <Route element={<Eventos />} path="/eventos" />
      </Routes>
    </BrowserRouter>
  );
};
export default YoraRoutes;
