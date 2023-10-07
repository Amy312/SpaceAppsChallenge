import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col w-[85%] bg-[#47576E] px-10 py-5 rounded-2xl space-y-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label
        className="font-semibold font-principal text-2xl text-white"
        htmlFor="email"
      >
        E-mail
      </label>
      <input
        className="px-3 rounded-lg h-9"
        type="text"
        id="email"
        {...register("email", {
          required: "* Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "* This is an invalid email",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <label
        className="font-semibold font-principal text-2xl text-white"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="px-3 rounded-lg h-9"
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
        <button className="bg-[#538086] hover:opacity-40 font-bold rounded-s w-[45%] font-principal h-12 self-center text-white">
          Login
        </button>
        <p className="font-principal hover:underline cursor-pointer text-white">
          <Link href="/auth/signup">Don't you have an account? Sign up</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
