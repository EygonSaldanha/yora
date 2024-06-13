import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AttendeeList } from "./components/attendee-list";
import {EventRegistrationPage} from "./components/Event_Registration/EventRegistrationPage";
import EventAttendancePage from "./components/Frequencia/EventAttendancePage"; 
import { Header } from "./components/header";
import { Eventos } from "./pages/eventos/eventos";
import { Login } from "./pages/login/login";
import { Singup } from "./pages/login/singup";

const YoraRoutes = () => {
  return (
    <>
      {!(location.pathname === "/login" || location.pathname === "/login") ? (
        <></>
      ) : (
        <Header />
      )}
      {(location.pathname === "/login" || location.pathname === "/login") ?? (
        <Header />
      )}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route Component={AttendeeList} path="/participantes" />
          <Route element={<Eventos />} path="/eventos" />
          <Route element={<Login />} path="/login" />
          <Route element={<Singup />} path="/singup" />
          <Route Component={EventRegistrationPage} path="/EventRegistrationPage"/>
          <Route element={<EventAttendancePage />} path="/attendance" /> {/* Nova rota */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default YoraRoutes;
