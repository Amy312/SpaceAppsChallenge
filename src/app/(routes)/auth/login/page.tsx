"use client";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="flex w-full h-full">
        <div className="flex flex-col flex-1 justify-center items-center space-y-10">
          <p className="font-principal text-center text-5xl font-bold">
            Space App
            <br />
            Challenge
          </p>
          <p className="font-principal text-center text-3xl">
            Welcome to NASA’s
            <br />
            Marketplace!
          </p>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
