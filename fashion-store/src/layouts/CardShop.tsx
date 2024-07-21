import { Card } from "antd";
import { HTMLAttributes } from "react";
const { Meta } = Card;
type CardShopProps = Partial<HTMLAttributes<HTMLDivElement>> & {
    title: string;
    description: string;
    img: string;
  };
export default function CardShop({ id, title, description, img }: CardShopProps) {
  return (
    <Card
    className="my-8"
      id={id}
      hoverable
      style={{ width: 380 }}
      cover={
        <img
          alt="example"
          src={img}
          height={400}
        />
      }
    >
      <Meta title={title} description={description} style={{ textAlign: "center" }} />
    </Card>
  );
}
