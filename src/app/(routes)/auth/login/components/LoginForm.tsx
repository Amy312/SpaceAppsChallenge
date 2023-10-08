import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAxios from "axios-hooks";
import { setAuthToken } from "@/app/services/authService"; // Asegúrate de importar el servicio de autenticación
import { useRouter } from "next/navigation";
import Link from "next/link";
import { StoreContext } from "@/app/store/StoreProvider";

interface FormData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const context: any = useContext(StoreContext);
  const router = useRouter();

  const [{ data, loading, error }, executePost] = useAxios(
    {
      method: "POST",
      url: "http://localhost:8000/api/v1/auth/token/login",
    },
    { manual: true } // Configuración para que la solicitud no se realice automáticamente
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Realiza la solicitud POST al servidor utilizando Axios Hooks
      const response = await executePost({
        data, // Los datos del formulario
      });

      // El servidor ha respondido con éxito
      console.log("Response:", response.data);
      // Aquí puedes manejar la respuesta del servidor, redirigir, mostrar un mensaje, etc.

      const { auth_token } = response.data;

      // Guarda el token utilizando el servicio de autenticación
      setAuthToken(auth_token);

      context.setAuth(true);
      // Realiza otras acciones después de guardar el token
      router.push("/home/new-projects");
    } catch (err) {
      // Hubo un error en la solicitud POST
      console.error("Error:", err);
      // Puedes manejar el error, mostrar un mensaje de error, etc.
    }
  };

  return (
    <form
      className="flex flex-col w-[85%] bg-[#47576E] px-10 py-5 rounded-2xl space-y-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label
        className="font-semibold font-principal text-2xl text-white"
        htmlFor="username"
      >
        Username
      </label>
      <input
        className="px-3 rounded-lg h-9"
        type="text"
        id="username"
        {...register("username", {
          required: "* username is required",
        })}
      />
      {errors.username && <p>{errors.username.message}</p>}
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
            message: "* The minimum length is 8 characters",
          },
          maxLength: {
            value: 20,
            message: "* The maximum length is 20 characters",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <div className="flex flex-col self-center space-y-2">
        <button className="bg-[#538086] hover:opacity-40 font-bold rounded-s w-[45%] font-principal h-12 self-center text-white">
          Login
        </button>
        <p className="font-principal hover:underline cursor-pointer text-white">
          <Link href="/auth/signup">
            {" "}
            Don{"'"}t you have an account? Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
