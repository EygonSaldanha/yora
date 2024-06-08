import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AttendeeList } from "./components/attendee-list";
import { EventRegistrationPage } from "./components/Event_Registration/EventRegistrationPage";
import { Header } from "./components/header";
import { Eventos } from "./pages/eventos/eventos";
import { Login } from "./pages/login/login";
import { Singup } from "./pages/login/singup";

const YoraRoutes = () => {
  return (
    <>
      {location.pathname === "/login" ? "" : <Header />}
      {location.pathname === "/login" ?? <Header />}
      <BrowserRouter>
        <Routes>
          <Route Component={AttendeeList} path="/participantes" />
          <Route element={<Eventos />} path="/eventos" />
          <Route element={<Login />} path="/login" />
          <Route element={<Singup />} path="/singup" />
          <Route
            Component={EventRegistrationPage}
            path="/EventRegistrationPage"
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default YoraRoutes;
