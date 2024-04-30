import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useLocation, Link, useNavigate } from "react-router-dom";
// import { useAllHotelsContext } from "@/pages/dashboard/db-list-hotel";

const PageBtnContainer = ({ data }) => {
  const { numOfPages, currentPage } = data;
  // const {
  //   data: { numOfPages, currentPage },
  // } = useAllHotelsContext();
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        className={`${activeClass && "is-active"}`}
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    // Add the first page button
    pageButtons.push(
      addPageButton({ pageNumber: 1, activeClass: currentPage === 1 })
    );
    // Add the dots before the current page if there are more than 3 pages
    if (currentPage > 3) {
      pageButtons.push(<span key="dot-1">....</span>);
    }
    // one before current page
    if (currentPage !== 1 && currentPage !== 2) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage - 1, activeClass: false })
      );
    }

    // Add the current page button
    if (currentPage !== 1 && currentPage !== numOfPages) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage, activeClass: true })
      );
    }

    // one after current page
    if (currentPage !== numOfPages && currentPage !== numOfPages - 1) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage + 1, activeClass: false })
      );
    }
    if (currentPage < numOfPages - 2) {
      pageButtons.push(<span key="dot-2">....</span>);
    }

    // Add the last page button
    pageButtons.push(
      addPageButton({
        pageNumber: numOfPages,
        activeClass: currentPage === numOfPages,
      })
    );

    return pageButtons;
  };
  return (
    <div className="pagination justify-center">
      {/* <button
        className="prev-btn"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button> */}
      <button
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}
        className="pagination__button customStylePaginationPre button -accent-1 mr-15 -prev"
      >
        <i className="icon-arrow-left text-15"></i>
      </button>

      <div className="pagination__count">{renderPageButtons()}</div>

      {/* <div className="btn-container">{renderPageButtons()}</div> */}

      <button
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
        className="pagination__button customStylePaginationNext button -accent-1 ml-15 -next"
      >
        <i className="icon-arrow-right text-15"></i>
      </button>

      {/* <button
        className="btn next-btn"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next
        <HiChevronDoubleRight />
      </button> */}
    </div>
  );
};

export default PageBtnContainer;

// import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
// import Wrapper from "../assets/wrappers/PageBtnContainer";
// import { useLocation, Link, useNavigate } from "react-router-dom";
// import { useAllHotelsContext } from "../pages/AllHotels";

// const PageBtnContainer = () => {
//   const {
//     data: { numOfPages, currentPage },
//   } = useAllHotelsContext();
//   const { search, pathname } = useLocation();
//   const navigate = useNavigate();
//   const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

//   const handlePageChange = (pageNumber) => {
//     const searchParams = new URLSearchParams(search);
//     searchParams.set("page", pageNumber);
//     navigate(`${pathname}?${searchParams.toString()}`);
//   };

//   const addPageButton = ({ pageNumber, activeClass }) => {
//     return (
//       <button
//         className={`btn page-btn ${activeClass && "active"}`}
//         key={pageNumber}
//         onClick={() => handlePageChange(pageNumber)}
//       >
//         {pageNumber}
//       </button>
//     );
//   };

//   const renderPageButtons = () => {
//     const pageButtons = [];

//     // Add the first page button
//     pageButtons.push(
//       addPageButton({ pageNumber: 1, activeClass: currentPage === 1 })
//     );
//     // Add the dots before the current page if there are more than 3 pages
//     if (currentPage > 3) {
//       pageButtons.push(
//         <span className="page-btn dots" key="dots-1">
//           ....
//         </span>
//       );
//     }
//     // one before current page
//     if (currentPage !== 1 && currentPage !== 2) {
//       pageButtons.push(
//         addPageButton({ pageNumber: currentPage - 1, activeClass: false })
//       );
//     }

//     // Add the current page button
//     if (currentPage !== 1 && currentPage !== numOfPages) {
//       pageButtons.push(
//         addPageButton({ pageNumber: currentPage, activeClass: true })
//       );
//     }

//     // one after current page
//     if (currentPage !== numOfPages && currentPage !== numOfPages - 1) {
//       pageButtons.push(
//         addPageButton({ pageNumber: currentPage + 1, activeClass: false })
//       );
//     }
//     if (currentPage < numOfPages - 2) {
//       pageButtons.push(
//         <span className=" page-btn dots" key="dots+1">
//           ....
//         </span>
//       );
//     }

//     // Add the last page button
//     pageButtons.push(
//       addPageButton({
//         pageNumber: numOfPages,
//         activeClass: currentPage === numOfPages,
//       })
//     );

//     return pageButtons;
//   };
//   return (
//     <Wrapper>
//       <button
//         className="prev-btn"
//         onClick={() => {
//           let prevPage = currentPage - 1;
//           if (prevPage < 1) prevPage = numOfPages;
//           handlePageChange(prevPage);
//         }}
//       >
//         <HiChevronDoubleLeft />
//         prev
//       </button>
//       <div className="btn-container">{renderPageButtons()}</div>
//       <button
//         className="btn next-btn"
//         onClick={() => {
//           let nextPage = currentPage + 1;
//           if (nextPage > numOfPages) nextPage = 1;
//           handlePageChange(nextPage);
//         }}
//       >
//         next
//         <HiChevronDoubleRight />
//       </button>
//     </Wrapper>
//   );
// };

// export default PageBtnContainer;
