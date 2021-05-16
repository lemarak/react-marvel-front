import "./Pagination.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ page, setPage, count, limit }) => {
  const pageMax = Math.ceil(Number(count) / Number(limit));
  if (pageMax < page) {
    setPage(1);
  }
  return pageMax <= 1 ? (
    <div className="pagination"></div>
  ) : (
    <div>
      <div className="pagination">
        {/* First Page */}
        {page > 1 && pageMax > 2 && (
          <div
            onClick={() => {
              setPage(1);
            }}
          >
            {" "}
            <FontAwesomeIcon icon="fast-backward" className="icon" />{" "}
          </div>
        )}
        {/* Previous Page */}
        {page > 1 && (
          <div
            onClick={() => {
              setPage(page - 1);
            }}
          >
            {" "}
            <FontAwesomeIcon icon="backward" className="icon" />{" "}
          </div>
        )}
        {/* Display pages */}
        <span>
          {" "}
          page {page} / {pageMax}
        </span>
        {/* Next page */}
        {page < pageMax && (
          <div
            onClick={() => {
              setPage(page + 1);
            }}
          >
            {" "}
            <FontAwesomeIcon icon="forward" className="icon" />{" "}
          </div>
        )}
        {/* Last page */}
        {page < pageMax && pageMax > 2 && (
          <div
            onClick={() => {
              setPage(pageMax);
            }}
          >
            {" "}
            <FontAwesomeIcon icon="fast-forward" className="icon" />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
