import { useForm } from "react-hook-form";
import { useNavigationStore } from "@src/stores/useNavigationStore";
import LoginGoogle from "./LoginGoogle";
type Logins = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const Loginform = useForm<Logins>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = Loginform;
  const onSubmitLogin = (data: Logins) => console.log(data, "Login");
  return (
    <div>
      <h1 className="text-xl font-bold">SIGN IN</h1>
      <form
        onSubmit={handleSubmit(onSubmitLogin)}
        className="flex flex-col mt-2"
      >
        <label htmlFor="email" className="text-sm mt-5">
          Email
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="border border-solid border-black rounded-md h-14 p-1 lg:w-96 mt-3 md:w-80"
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}

        <label htmlFor="password" className="text-sm mt-5">
          Password
        </label>
        <input
          type="password"
          {...register("password", { required: true})}
          className="border border-solid border-black rounded-md h-14 p-1 lg:w-96 mt-3 md:w-80"
        />
        {errors.password && (
          <span className="text-red-500">Password is required</span>
        )}

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
        <a className="underline mt-4 text-sm cursor-pointer">
          Forgot password?
        </a>
      </form>
      <LoginGoogle />
    </div>
  );
}
