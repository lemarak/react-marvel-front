import "./Pagination.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ page, setPage, count, limit }) => {
  const pageMax = Math.ceil(Number(count) / Number(limit));
  if (pageMax < page) {
    setPage(1);
  }
  return (
    <div className="pagination">
      {page > 1 && (
        <div
          onClick={() => {
            setPage(page - 1);
          }}
        >
          {" "}
          <FontAwesomeIcon icon="angle-left" className="icon" size="2x" />{" "}
        </div>
      )}
      <span>
        {" "}
        page {page} / {pageMax}
      </span>
      {page < pageMax && (
        <div
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {" "}
          <FontAwesomeIcon icon="angle-right" className="icon" size="2x" />{" "}
        </div>
      )}
    </div>
  );
};

export default Pagination;
