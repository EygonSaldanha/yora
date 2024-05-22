import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AttendeeList } from "./components/attendee-list";
import { Eventos } from "./pages/eventos/eventos";

const YoraRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AttendeeList />} path="/dashBoard" />
        <Route element={<Eventos />} path="/eventos" />
      </Routes>
    </BrowserRouter>
  );
};
export default YoraRoutes;
