import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AttendeeList } from "./components/attendee-list";

const YoraRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AttendeeList />} path="/dashBoard" />
      </Routes>
    </BrowserRouter>
  );
};
export default YoraRoutes;
