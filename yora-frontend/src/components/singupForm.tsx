import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

/**
 * fazer backend para registrar usuario
 * redirecionar para login
 *
 */
export function SingUpForm() {
  const createUserFormSchema = z
    .object({
      userName: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords did not match",
          path: ["confirmPassword"],
        });
      }
    });

  type CreateUserFormData = z.infer<typeof createUserFormSchema>;
  //   const navigate = useNavigate();

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
  console.log("erross>>>>", errors);
  return (
    <form onSubmit={handleSubmit(createUser)}>
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
              type={"email"}
              {...register("email")}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-lg font-medium">Nome</label>
            <input
              className="w-full rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your name"
              {...register("userName")}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-lg font-medium">Password</label>
            <input
              className="w-full rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your password"
              type={"password"}
              {...register("password")}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-lg font-medium">Confirme Password</label>
            <input
              className="w-full rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Confirme Password"
              type={"password"}
              {...register("confirmPassword")}
            />
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              className="active:scale-[.98] active:duration-75 transition-all 
            hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl 
            text-white font-bold text-lg "
              //TODO: fazer chamada para o backend para registrar e verificar se o email ja existe
              type="submit">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <pre>{output}</pre>
    </form>
  );
}
