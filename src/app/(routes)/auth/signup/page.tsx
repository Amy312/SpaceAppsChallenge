"use client"
import SignUpForm from "./components/SignUpForm";

const LoginPage = () => {
  return (
    <>
      <div className="flex w-full h-full bg-[#47576E]">
        <div className="flex flex-col flex-1 justify-center items-center space-y-10">
          <p className="font-principal text-center text-5xl font-bold text-white">
            Space App
            <br />
            Challenge
          </p>
          <p className="font-principal text-center text-3xl text-white">
            Register to NASA’s
            <br />
            Marketplace!
          </p>
        </div>
        <div className="flex flex-1 justify-center items-center">
            <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
