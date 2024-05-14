import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AttendeeList } from "./components/attendee-list";

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
