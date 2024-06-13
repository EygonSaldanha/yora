import yoraLogo from "../assets/yoraLogo.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className=" text-right flex items-center gap-5 py-2">
      <img src={yoraLogo} alt="NLW Unite" />
      <nav className="flex items-center gap-5">
        <NavLink href="/DashBoard">DashBoard</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
        <NavLink href="/Eventos">Eventos</NavLink>
        <NavLink href="/EventRegistrationPage">Inscrições</NavLink>
        <NavLink href="/frequencia">Frequência</NavLink>
        <NavLink href="/login">Login</NavLink>
      </nav>
    </div>
  );
}
