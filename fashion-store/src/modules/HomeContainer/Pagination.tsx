import ReactPaginate from "react-paginate";
import { HTMLAttributes } from "react";
type PaginationProps = Partial<HTMLAttributes<HTMLDivElement>> & {
    currentPage: number;
    totalPages: number;
    handlePageClick: (event: { selected: number }) => void;
  };
export default function Pagination({id, currentPage, totalPages, handlePageClick }: PaginationProps) {
  return (
    <div id={id} className="w-full border-b border-primary-2 font-mono mb-16">
      <nav className="flex flex-wrap justify-center text-primary-3-mb-px">
        <ReactPaginate
          breakLabel="..."
          nextLabel={currentPage === totalPages - 1 ? "" : <span>&#8702;</span>}
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
  );
}
