import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AttendeeList } from "./components/attendee-list";
import { Eventos } from "./pages/eventos/eventos";
import { EventRegistrationPage } from "./components/Event_Registration/EventRegistrationPage";

const YoraRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={AttendeeList} path="/participantes" />
        <Route element={<Eventos />} path="/eventos" />
        <Route
          Component={EventRegistrationPage}
          path="/EventRegistrationPage"
        />
      </Routes>
    </BrowserRouter>
  );
};
export default YoraRoutes;
