import { useNavigate } from "react-router-dom";

export function Singup() {
  const navigate = useNavigate();

  return (
    <>
      <div className=" w-full max-w-[700px] px-10 py-20 rounded-3xl ">
        <h1 className="text-5xl font-semibold">Welcome</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Please enter your details.
        </p>
        <div className="mt-8">
          <div className="flex flex-col mt-4">
            <label className="text-lg font-medium">Email</label>
            <input
              className="w-full rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-lg font-medium">Name</label>
            <input
              className="w-full rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-lg font-medium">Password</label>
            <input
              className="w-full rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your password"
              type={"password"}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-lg font-medium">Confirme Password</label>
            <input
              className="w-full rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Confirme Password"
              type={"password"}
            />
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              className="active:scale-[.98] active:duration-75 transition-all 
            hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl 
            text-white font-bold text-lg "
              //TODO: fazer chamada para o backend para registrar e verificar se o email ja existe
              onClick={() => navigate("/participantes")}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
