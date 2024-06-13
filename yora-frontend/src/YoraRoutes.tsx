import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";
import { EventRegistrationPage } from "./pages/Event_Registration/EventRegistrationPage";
import { CreateEvent } from "./pages/eventos/CreateEvent";
import { Eventos } from "./pages/eventos/eventos";
import { EventPage } from "./pages/eventos/eventPage";
import { Login } from "./pages/login/login";
import { Singup } from "./pages/login/singup";

const YoraRoutes = () => {
  return (
    <>
      {location.pathname === "/login" || location.pathname === "/login" ? (
        <></>
      ) : (
        <Header />
      )}
      <BrowserRouter>
        <Routes>
          <Route Component={AttendeeList} path="/participantes" />
          <Route element={<Eventos />} path="/eventos" />
          <Route element={<Login />} path="/login" />
          <Route element={<Singup />} path="/singup" />
          <Route element={<CreateEvent />} path="/create-event" />
          <Route element={<EventPage />} path="/eventpage/:id" />
          <Route
            Component={EventRegistrationPage}
            path="/EventRegistrationPage/:id"
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default YoraRoutes;
