import CardShop from "@src/layouts/CardShop";
import { products, itemsPerPage } from "@src/constants/shop.constants";
import ReactPaginate from "react-paginate";
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
              id={product.id}
              title={product.title}
              description={product.description}
              img={product.img}
            />
          </div>
        ))}
      </div>

      <div className="w-full border-b border-primary-2 font-mono mb-16">
        <nav className="flex flex-wrap justify-center text-primary-3-mb-px">
          <ReactPaginate
            breakLabel="..."
            nextLabel={
              currentPage === totalPages - 1 ? "" : <span>&#8702;</span>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageCount={totalPages}
            previousLabel={currentPage === 0 ? "" : <span>&#8701;</span>}
            pageClassName="page-item p-2 mx-1 border-b border-transparent hover:border-primary-1"
            pageLinkClassName="page-link"
            previousClassName="page-item p-2 mx-1 border-b border-transparent hover:border-primary-1"
            previousLinkClassName="page-link"
            nextClassName="page-item p-2 mx-1 border-b border-transparent hover:border-primary-1"
            nextLinkClassName="page-link"
            breakClassName="page-item p-2 mx-1"
            breakLinkClassName="page-link"
            containerClassName="pagination flex flex-wrap justify-center text-gray-700 -mb-px"
            activeClassName="current p-2 mx-1 text-gray-800 border-b-1 border-b-primary-1"
          />
        </nav>
      </div>
    </>
  );
}
