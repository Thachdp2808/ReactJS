import { useForm, SubmitHandler } from "react-hook-form";
import InputForm from "./InputForm";
import { GoogleIcon } from "@src/icons/GoogleIcon";

type Logins = {
  email: string;
  password: string;
};

type Registers = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function AccountContainer() {
  const Loginform = useForm<Logins>();
  const Registerform = useForm<Registers>();
  const { register: registerLogin, handleSubmit: handleLoginSubmit } =
    Loginform;
  const { register: registerRegister, handleSubmit: handleRegisterSubmit } =
    Registerform;
  const onSubmitLogin = (data: Logins) => console.log(data, "Login");
  const onSubmitRegister = (data: Registers) => console.log(data, "Register");
  return (
    <>
      <div className="flex flex-col justify-between items-center px-10 2xl:px-56">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-3xl font-bold">Hello there!</h1>
          <p className="text-xl">
            Please sign in or create an account to continue
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-16 md:w-full">
          <div>
            <h1 className="text-xl font-bold">SIGN IN</h1>
            <form
              onSubmit={handleLoginSubmit(onSubmitLogin)}
              className="flex flex-col mt-2"
            >
              <InputForm
                label="Email"
                type="email"
                required={false}
                defaultValue={"test"}
                register={registerLogin}
                name="email"
              />

              <InputForm
                label="Password"
                type="password"
                required={true}
                register={registerLogin}
                name="password"
              />
              <div className="flex items-center w-500px">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  value="yes"
                  className="w-4 h-4 mt-2 cursor-pointer"
                />
                <label htmlFor="rememberMe" className="text-sm ml-2 mt-3">
                  Remeber my details
                </label>
              </div>

              <button className="bg-primary-1 text-white py-2 rounded-md mt-4 ">
                SIGN IN
              </button>
              <a className="underline mt-4 text-sm cursor-pointer">Forgot password?</a>
            </form>
            <button className="flex items-center gap-2 p-2 bg-primary-3 text-white rounded-md mt-4">
              <GoogleIcon className="items-center"/>
              <p className="">
                LOGIN WITH GOOGLE
              </p>
            </button>
          </div>

          <div className="mt-4 md:mt-0">
            <h1 className="text-xl font-bold">CREATE ACCOUNT</h1>
            <form
              onSubmit={handleRegisterSubmit(onSubmitRegister)}
              className="flex flex-col mt-2"
            >
              <InputForm
                label="First Name"
                type="text"
                required={true}
                defaultValue={"Nguyen"}
                register={registerRegister}
                name="firstName"
              />
              <InputForm
                label="Last Name"
                type="text"
                required={true}
                defaultValue={"A"}
                register={registerRegister}
                name="lastName"
              />
              <InputForm
                label="Email"
                type="email"
                required={true}
                defaultValue={"test"}
                register={registerRegister}
                name="email"
              />

              <InputForm
                label="Create Password"
                type="password"
                required={true}
                register={registerRegister}
                name="createPassword"
              />

              <InputForm
                label="Confirm Password"
                type="password"
                required={true}
                register={registerRegister}
                name="confirmPassword"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="vehicle3"
                  name="vehicle3"
                  value="Boat"
                  className="w-4 h-4 mt-2 "
                />
                <label htmlFor="vehicle3" className="text-sm ml-2 mt-3 ">
                  I want to receive Safari newletters with the best
                </label>
              </div>

              <button className="bg-primary-1 text-white py-2 px-5 rounded-md mt-4">
                CREATE ACCOUNT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
