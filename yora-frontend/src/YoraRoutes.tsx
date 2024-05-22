import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AttendeeList } from "./components/attendee-list";
import { EventRegistrationPage } from './components/Event_Registration/EventRegistrationPage';

const YoraRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={AttendeeList} path="/participantes" />
      </Routes>
    </BrowserRouter>
  );
};
export default YoraRoutes;