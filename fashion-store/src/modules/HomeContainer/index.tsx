import CardShop from "@src/layouts/CardShop";
import { products, itemsPerPage } from "@src/constants/shop.constants";
import Pagination from "@src/modules/HomeContainer/Pagination";
import {  useEffect } from "react";
import { useNavigationStore } from "@src/stores/useNavigationStore";
const chunkArray = (start: number, end: number, arr: any, size: number) => {
  const result = [];
  for (let i = start; i < end; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
export default function HomeContainer() {
  const { rows, setRows, currentPage, setCurrentPage } = useNavigationStore();
  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    setRows(chunkArray(0, products.length, products, itemsPerPage)[0]);
  }, [products]);

  const handlePageClick = (event: any) => {
    const newOffset = event.selected * itemsPerPage;
    setRows(
      chunkArray(newOffset, newOffset + itemsPerPage, products, itemsPerPage)[0]
    );
    setCurrentPage(event.selected);
  };
  return (
    <>
      <div className="flex justify-center items-center bg-primary-1 w-full h-screen relative">
        <img
          src="./public/BackgroundText.png"
          alt="BackgroundText"
          className="absolute w-auto z-0 h-full"
        ></img>
        <img
          src="./public/MaskGroup.png"
          alt="BackgroundImage"
          className="absolute h-full z-10"
        ></img>
      </div>
      <div className="flex justify-center items-center w-full relative">
        <div className="border-b-2 border-b-solid border-b-black w-full h-[70px]"></div>
        <div className="flex justify-center items-center absolute bottom-[-24px] z-10">
          <p className="text-center text-[40px] font-medium bg-white">
            Shop your style
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center w-full h-[100px] lg:px-[170px] flex-wrap py-10">
        <p className="text-center text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
          cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut
          lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis
          diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae
          adipiscing id facilisis.
        </p>
      </div>
      <div className="flex justify-evenly items-center w-full my-4 flex-wrap mt-40 md:mt-12">
        {rows.map((product) => (
          <div className="flex justify-evenly items-center sm:w-full md:w-1/4">
            <CardShop
              key={product.id}
              title={product.title}
              description={product.description}
              img={product.img}
            />
          </div>
        ))}
      </div>
      <Pagination key={currentPage} currentPage={currentPage} totalPages={totalPages} handlePageClick={handlePageClick}/>
    
    </>
  );
}
