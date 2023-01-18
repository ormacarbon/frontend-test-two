import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import dataContext from "../../context/dataContext";
import { Card, CardsView, Img, Space } from "./styles";

const Cards = () => {
  const { board, selectedItem, setSelectedItem } = useContext(dataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const router = useRouter();

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
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
        )}
        {indexOfLastItem < board.length && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
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
                <div>Rank: {item.rank}</div>
                <div>Score: {item.score}</div>
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
