import { useNavigate } from "react-router-dom";
import { SingUpForm } from "../../components/singupForm";

export function Singup() {
  const navigate = useNavigate();

  return <SingUpForm />;
}
