import ModalError from "@/app/modals/ModalError";
import ModalLoading from "@/app/modals/ModalLoading";
import apiInstance from "@/app/services/apiInstance";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setLoading(true);
      setError(null);
      console.log("UNO");

      // Realiza la solicitud POST al servidor utilizando la instancia de Axios
      const response = await apiInstance.post("/auth/users/", data);
      router.back();
    } catch (err:any) {
      // Hubo un error en la solicitud POST
      console.error("Error:", err);
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ModalLoading/>;
  }

  if (error) {
    return <ModalError/>;
  }

  return (
    <form
      className="flex flex-col bg-white w-[85%] px-10 py-12 rounded-2xl space-y-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label
        className="font-semibold font-principal text-2xl text-[#47576E]"
        htmlFor="username"
      >
        Username
      </label>
      <input
        className="px-3 rounded-lg h-9 border border-[#47576E] outline-none"
        type="text"
        id="username"
        {...register("username", {
          required: "* Userame is required",
          minLength: { value: 3, message: "* The min lenght of a name is 3" },
          maxLength: { value: 30, message: "* The max lenght of a name is 30" },
          pattern: {
            value: /^[^\s]{3,15}$/,
            message: "* A username doesn't have spaces",
          },
        })}
      />
      {errors.username && <p>{errors.username.message}</p>}
      <label
        className="font-semibold font-principal text-2xl text-[#47576E]"
        htmlFor="email"
      >
        E-mail
      </label>
      <input
        className="px-3 rounded-lg h-9 border border-[#47576E] outline-none"
        type="text"
        id="email"
        {...register("email", {
          required: "* E-mail is required",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "* This is an invalid email",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <label
        className="font-semibold font-principal text-2xl text-[#47576E]"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="px-3 rounded-lg h-9 border border-[#47576E] outline-none"
        type="password"
        id="password"
        {...register("password", {
          required: "* Password is required",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            message: "* This is an invalid password",
          },
          minLength: {
            value: 8,
            message: "* The minimun lenght is 8 characters",
          },
          maxLength: {
            value: 20,
            message: "* The maximun lenght is 20 characters",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <div className="flex flex-col self-center space-y-2">
        <button className="bg-[#538086] hover:opacity-40 font-bold rounded-lg w-[45%] font-principal h-12 self-center text-white">
          Register
        </button>
        <p className="font-principal hover:underline cursor-pointer text-[#47576E]">
          <Link href="/auth/login"> Already have an account? Log in</Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
