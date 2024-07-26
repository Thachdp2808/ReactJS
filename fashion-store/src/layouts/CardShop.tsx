import { HTMLAttributes } from "react";

type CardShopProps = Partial<HTMLAttributes<HTMLDivElement>> & {
  title: string;
  description: string;
  img: string;
};
export default function CardShop({id, title, description, img}: CardShopProps) {
  return (
    <div id={id} className="flex flex-col hover:shadow-lg relative my-12">
      <img src="./public/ImageWhite.png" className=""></img>
      <img src={img} className="absolute inset-0 w-full"></img>
      <div className="flex flex-col justify-center items-center m-5">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
