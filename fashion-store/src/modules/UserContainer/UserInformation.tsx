import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigationStore } from "@src/stores/useNavigationStore";

type UserInformations = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  dateOfBirth: string;
};
export default function UserInformation() {
  const UserInformations = useForm<UserInformations>();
  const { register, setValue, handleSubmit } = UserInformations;
  const { accessToken } = useNavigationStore();

  const userInfo: UserInformations = {
    email: "user@example.com",
    firstName: "Nguyen",
    lastName: "A",
    gender: "Male",
    dateOfBirth: "01/01/2000",
  };
  useEffect(() => {
    if (userInfo) {
      setValue("email", userInfo.email);
      setValue("firstName", userInfo.firstName);
      setValue("lastName", userInfo.lastName);
      setValue("gender", userInfo.gender);
      setValue("dateOfBirth", userInfo.dateOfBirth);
    }
  }, [userInfo, setValue]);

  const onSubmitLogin = (data: UserInformations) =>
    console.log(data, "UserInformations");
  return (
    <>
      <div className="flex flex-col pt-8 md:p-8 pb-0 w-full">
        <p>User Information</p>
        <div className=" shadow-3xl mt-4">
          <form
            onSubmit={handleSubmit(onSubmitLogin)}
            className="flex flex-col px-10 py-8"
          >
            <label htmlFor="firstName" className="text-sm mt-5">
              First name
            </label>
            <input
              type="text"
              {...register("firstName", { required: true })}
              className="border border-solid border-black rounded-md h-14 p-1 lg:w-96 mt-3 md:w-80"
            />

            <label htmlFor="lastName" className="text-sm mt-5">
              Last name
            </label>
            <input
              type="text"
              {...register("lastName", { required: true })}
              className="border border-solid border-black rounded-md h-14 p-1 lg:w-96 mt-3 md:w-80"
            />

            <label htmlFor="email" className="text-sm mt-5">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="border border-solid border-black rounded-md h-14 p-1 lg:w-96 mt-3 md:w-80"
            />

            <label htmlFor="gender" className="text-sm mt-5">
              Gender
            </label>
            <select
              id="gender"
              {...register("gender", { required: true })}
              className="border border-solid border-black rounded-md h-14 p-1 lg:w-96 mt-3 md:w-80"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label htmlFor="dateOfBirth" className="text-sm mt-5">
              Date of birth
            </label>
            <input
              type="date"
              {...register("dateOfBirth", { required: true })}
              className="border border-solid border-black rounded-md h-14 p-1 lg:w-96 mt-3 md:w-80"
            />

            <a className="text-primary-1 mt-4 text-base font-medium">
              Change password
            </a>
            <div className="flex items-center w-500px">
              <input
                type="checkbox"
                id="Newsletter"
                name="Newsletter"
                value="yes"
                className="w-4 h-4 mt-6 cursor-pointer"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 mt-6 text-base font-medium"
              >
                Newsletter subscription
              </label>
            </div>
          </form>
        </div>
        <div>
          <button className="bg-primary-1 text-white py-2 px-10 rounded-md mt-4 ">
            SAVE CHANGES
          </button>
        </div>
      </div>
    </>
  );
}
