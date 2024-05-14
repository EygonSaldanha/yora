import { Header } from "./components/header";
import YoraRoutes from "./YoraRoutes";
export function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header />
      <YoraRoutes />
      {/* <AttendeeList /> */}
    </div>
  );
}
