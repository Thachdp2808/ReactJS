import { HTMLAttributes } from "react";
type InputFormPorps = Partial<HTMLAttributes<HTMLDivElement>> & {
  label: string;
  type: string;
  required: boolean;
  register: any;
  name: string;
};
export default function InputForm({ label, type, required, register, name }: InputFormPorps) {
  return (
    <>
      <label htmlFor={name} className="text-sm mt-5">
        {label}
      </label>
      <input
        type={type}
        required={required}
        {...register(name)}
        className="border border-solid border-black rounded-md h-14 p-1 w-96 mt-3 md:w-80"
      />
    </>
  );
}
