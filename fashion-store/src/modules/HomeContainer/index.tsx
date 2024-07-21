import { Flex } from "antd";
import CardShop from "@src/layouts/CardShop";
import { products } from "@src/constants/shop.constants";
const chunkArray = (arr: any, size: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
export default function HomeContainer() {
  const rows = chunkArray(products, 4);
  return (
    <>
      <Flex
        align="center"
        justify="center"
        className="bg-[#ED165F] w-full h-screen relative"
      >
        <img
          src="./public/BackgroundText.png"
          alt="BackgroundText"
          className="absolute w-auto z-0"
        ></img>
        <img
          src="./public/MaskGroup.png"
          alt="BackgroundImage"
          className="absolute h-full z-10"
        ></img>
      </Flex>
      <Flex align="center" justify="center" className="relative">
        <div className="border-b-2 border-b-solid border-b-black w-full h-[70px]"></div>
        <Flex
          align="center"
          justify="center"
          className="absolute bottom-[-24px] z-10"
        >
          <p className="text-center text-[40px] font-medium bg-white">
            Shop your style
          </p>
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="center"
        className="w-full h-[100px] px-[170px]"
      >
        <p className="text-center text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
          cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut
          lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis
          diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae
          adipiscing id facilisis.
        </p>
      </Flex>
      {rows.map((row, rowIndex) => (
        <Flex align="center" justify="space-evenly" className="w-full my-4" key={rowIndex}>
          {row.map(product => (
            <CardShop
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              img={product.img}
            />
          ))}
        </Flex>
      ))}
    </>
  );
}
