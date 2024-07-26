import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
type DashboardProps = Partial<HTMLAttributes<HTMLDivElement>> & {
  isActive: boolean;
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
  
};
export default function DashboardTab({ text, icon, isActive, onClick }: DashboardProps) {
  return (
    <li>
      <button className={
        twMerge("flex items-center gap-2 py-4 px-8 font-medium w-full", isActive ? "bg-primary-1 text-white underline decoration-primary-1 underline-offset-8" : "text-black")} onClick={() => onClick()}>
      {icon}{text}</button>
    </li>
  );
}
