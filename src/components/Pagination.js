import React from "react";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

const Pagination = ({ page, setPage, posts }) => {
  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= posts / 10 && pageNumber !== page) {
      setPage(pageNumber);
    }
  };
  if (posts === 0) {
    return null;
  }
  return (
    <div className="flex justify-evenly mb-4">
      <button
        onClick={() => handlePageClick(page - 1)}
        className={
          page > 1
            ? "bg-secondColor sm:p-1 text-white  font-work"
            : "bg-brandGray sm:p-1 text-white font-work disabled"
        }
      >
        <ArrowSmallLeftIcon className="h-8" />
      </button>

      {[...Array(posts / 10)].map((_, key) => {
        const hilightNumber =
          page === key + 1 ? "bg-secondColor text-white" : "";
        return (
          <button
            key={key}
            onClick={() => handlePageClick(key + 1)}
            className={`border p-1 min-[420px]:p-2 sm:p-3 md:p-4 ${hilightNumber}`}
          >
            {key + 1}
          </button>
        );
        // }
      })}
      <button
        onClick={() => handlePageClick(page + 1)}
        className={
          page < posts / 10
            ? "bg-secondColor sm:p-1  text-white  font-work"
            : "bg-brandGray sm:p-1 text-white font-work disabled"
        }
      >
        {" "}
        <ArrowSmallRightIcon className="h-8" />
      </button>
    </div>
  );
};

export default Pagination;
