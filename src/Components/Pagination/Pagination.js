import { useState, useEffect } from "react";

function Pagination({ apiRequest, hideBySearch }) {
  const [disabled, setDisabled] = useState(true);
  const [active, setActive] = useState(1);
  const [paginationCount, setpaginationCount] = useState([
    "<",
    1,
    2,
    3,
    4,
    ">",
  ]);

  const _handlePagination = (item) => {
    let [offset, url] = [null];
    let verifyChacaracterNavegation =
      item.toString().includes("<") || item.toString().includes(">");
    setActive(item);

    // return;
    if (!verifyChacaracterNavegation) {
      offset = `=${item * 15}&`;
      url = "https://pokeapi.co/api/v2/pokemon?offset=15&limit=15";
      const pattern = new RegExp(`=[0-9][0-9]&`);
      url = url.replace(pattern, offset);
    }

    if (!verifyChacaracterNavegation) {
      apiRequest(url);
      return;
    } else {
      const newPagination = paginationCount.map((_item) => {
        if (_item === ">") {
          setDisabled(false);
          return _item;
        } else if (_item === "<") {
          return _item;
        } else {
          return item === "<" ? _item - 1 : _item + 1;
        }
      });

      if (newPagination.includes(1)) {
        setDisabled(true);
      }

      setpaginationCount(newPagination);
      return;
    }
  };

  return (
    <div className={`pagination-container ${hideBySearch}`}>
      {paginationCount.map((item, index) => {
        return (
          <div key={index}>
            {index + 1 > 1 && index + 1 < 6 ? (
              <button
                className={`pagination-btn ${active == item ? "selected" : ""}`}
                onClick={() => _handlePagination(item)}
              >
                {item}
              </button>
            ) : index + 1 === 1 ? (
              <button
                className="pagination-btn"
                onClick={() => _handlePagination(item)}
                disabled={disabled}
              >
                {item}
              </button>
            ) : index + 1 === 6 ? (
              <button
                className="pagination-btn"
                onClick={() => _handlePagination(item)}
              >
                {item}
              </button>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;
