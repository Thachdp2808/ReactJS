import { HTMLAttributes } from "react";
import { Button } from "antd";
type MenuTabProps = Partial<HTMLAttributes<HTMLDivElement>> & {
  isActive: boolean;
  text: string;
  onClick: () => void;
};
export default function MenuTab({ id, isActive, text, onClick }: MenuTabProps) {
  return (
    <Button
      id={id}
      type="text"
      className={`p-5 font-medium  ${
        isActive
          ? "text-[#ED165F] underline decoration-[#ED165F] underline-offset-8"
          : " text-black"
      }`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
