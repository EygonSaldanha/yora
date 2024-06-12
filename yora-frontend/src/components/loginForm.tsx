import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { GoogleButton } from "./googleButton";

/**
 * fazer backend para valdiar usuario
 * gardar key para autenticar usuario
 */
export function LoginForm() {
  const createUserFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "precisa de no minimo 8 caracteres"),
  });
  type CreateUserFormData = z.infer<typeof createUserFormSchema>;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });
  const [output, setOutput] = useState("");

  function createUser(dada: any) {
    setOutput(JSON.stringify(dada, null, 2));
  }

  return (
    <form onSubmit={handleSubmit(createUser)}>
      <div className="mt-8">
        <div className="flex flex-col">
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full rounded-xl p-4 mt-1 bg-transparent"
            type={"email"}
            {...register("email")}
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
            {...register("password")}
            type={"password"}
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input className="rounded-xl" type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-base" htmlFor="remember">
              Remember for 30 days
            </label>
          </div>
          {/*
            <button className="font-medium text-base text-violet-500">
            Forgot password
            </button> 
        */}
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            className="active:scale-[.98] active:duration-75 transition-all 
          hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl 
          text-white font-bold text-lg "
            type="submit"
            // onClick={() => navigate("/participantes")}
          >
            Sign in
          </button>
          <GoogleButton />
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Don't have an account?</p>
          <button
            onClick={() => navigate("/singup")}
            className="ml-2 font-medium text-base text-violet-500">
            Sign up
          </button>
        </div>
      </div>
      <pre>{output}</pre>
    </form>
  );
}
