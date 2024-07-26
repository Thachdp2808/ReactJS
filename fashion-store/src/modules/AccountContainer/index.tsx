import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
export default function AccountContainer() {
  return (
    <>
      <div className="flex flex-col justify-between items-center px-10 xl:px-56">
        <div className="flex flex-col items-start w-full mt-16">
          <h1 className="text-3xl font-bold">Hello there!</h1>
          <p className="text-xl">
            Please sign in or create an account to continue
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-16 md:w-full">
          <LoginForm/>
          <RegisterForm/>
        </div>
      </div>
    </>
  );
}
