import { useForm } from "react-hook-form";

type Registers = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const validatePassword = (value: string) => {
    // const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).*$/
    if (!/(?=.*[0-9])/.test(value)) {
      return "Password must include at least one number";
    }
    if (!/(?=.*[a-z])/.test(value)) {
      return "Password must include at least one lowercase letter";
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      return "Password must include at least one uppercase letter";
    }
    if (!/(?=.*[@$!%*?&])/.test(value)) {
      return "Password must include at least one special character";
    }
    return true; // Password is valid
  };
export default function RegisterForm() {
  const Registerform = useForm<Registers>();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = Registerform;
  const onSubmitRegister = (data: Registers) => console.log(data, "Register");
  return (
    <div className="mt-4 md:mt-0">
      <h1 className="text-xl font-bold">CREATE ACCOUNT</h1>
      <form
        onSubmit={handleSubmit(onSubmitRegister)}
        className="flex flex-col mt-2"
      >
        <label htmlFor="firstName" className="text-sm mt-5">
          First Name
        </label>
        <input
          type="text"
          {...register("firstName", {
            required: "First Name is required",
            maxLength: { value: 20, message: "Max length is 20" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Only letters are allowed",
            },
          })}
          className="border border-solid border-black rounded-md h-14 p-1 lg:w-96 mt-3 md:w-80"
        />
      {errors.firstName && (
          <span className="text-red-500">{errors.firstName.message}</span>
        )}

        <label htmlFor="lastName" className="text-sm mt-5">
          Last Name
        </label>
        <input
          type="text"
          {...register("lastName", {
            required: "Last Name is required",
            maxLength: { value: 20, message: "Max length is 20" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Only letters are allowed",
            },
          })}
          className="border border-solid border-black rounded-md h-14 p-1 lg:w-96 mt-3 md:w-80"
        />
        {errors.lastName && (
          <span className="text-red-500">{errors.lastName.message}</span>
        )}

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

        <label htmlFor="createPassword" className="text-sm mt-5">
          Create Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 8, message: "Min length is 8" },
            validate: validatePassword,
          })}
          className="border border-solid border-black rounded-md h-14 p-1 lg:w-96 mt-3 md:w-80"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <label htmlFor="confirmPassword" className="text-sm mt-5">
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            minLength: { value: 8, message: "Min length is 8" },
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || "Passwords should match!";
              },
            },
          })}
          className="border border-solid border-black rounded-md h-14 p-1 lg:w-96 mt-3 md:w-80"
        />
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}

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
  );
}
