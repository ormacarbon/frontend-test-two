import Link from "next/link";
import React, { useContext, useState } from "react";
import dataContext from "../../context/dataContext";
import { Buttons, Card, CardsView, Img, Space } from "./styles";

const Cards = () => {
  const { board, setSelectedItem } = useContext(dataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = board.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div>
        {indexOfFirstItem > 0 && (
          <Buttons onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </Buttons>
        )}
        {indexOfLastItem < board.length && (
          <Buttons onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </Buttons>
        )}
      </div>
      <CardsView>
        {currentItems.length > 0 &&
          currentItems.map((item) => (
            <Card key={item.player_id} onClick={() => handleClick(item)}>
              <div>
                <Img src={item.avatar} alt="" />
              </div>
              <div>{item.username}</div>
              <Space>
                <div>
                  <strong>Rank: </strong>
                  {item.rank}
                </div>
                <div>
                  <strong> core: </strong>
                  {item.score}
                </div>
                <Link
                  href={"/player/[username]"}
                  as={`/player/${item.username}`}
                >
                  <button onClick={() => handleClick(item)}>
                    View Details
                  </button>
                </Link>
              </Space>
            </Card>
          ))}
      </CardsView>
    </>
  );
};

export default Cards;
