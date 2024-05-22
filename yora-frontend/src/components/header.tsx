import yoraLogo from "../assets/yoraLogo.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className=" text-right flex items-center gap-5 py-2">
      <img src={yoraLogo} alt="NLW Unite" />
      <nav className="flex items-center gap-5">
        <NavLink href="/inicio">início</NavLink>
        <NavLink href="/dashBoard">DashBoard</NavLink>
        <NavLink href="/eventos">Eventos</NavLink>
      </nav>
    </div>
  );
}
