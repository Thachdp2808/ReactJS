import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type IcontabProps = Partial<HTMLAttributes<HTMLDivElement>> & {
  isActive: boolean;
  icon: React.ReactNode;
  onClick: () => void;
};
export default function IconTab({ id, isActive, icon, onClick }: IcontabProps) {
  return (
    <li className="flex justify-center items-center">
      <button id={id} onClick={onClick}>
        <span
          className={twMerge(
            "transition-colors duration-200",
            isActive ? "text-primary-1" : "text-black"
          )}
        >
          {icon}
        </span>
      </button>
    </li>
  );
}
