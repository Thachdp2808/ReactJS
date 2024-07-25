import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
type MenuTabProps = Partial<HTMLAttributes<HTMLDivElement>> & {
  isActive: boolean;
  text: string;
  onClick: () => void;
};
export default function MenuTab({ id, isActive, text, onClick }: MenuTabProps) {
  return (
    <li>
      <button
        id={id}
        onClick={onClick}
        className={twMerge(
          `p-5 font-medium md:p-2`,
          isActive ? "text-primary-1 underline decoration-primary-1 underline-offset-8"
          : " text-black"
        )}>
        {text}
      </button>
    </li>
  );
}
