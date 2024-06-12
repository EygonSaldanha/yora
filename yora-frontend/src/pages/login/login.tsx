import { LoginForm } from "../../components/loginForm";
export function Login() {
  return (
    <div className=" w-full max-w-[700px] px-10 py-20 rounded-3xl ">
      <h1 className="text-5xl font-semibold">Welcome Back</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Please enter you details.
      </p>
      <LoginForm />
    </div>
  );
}
