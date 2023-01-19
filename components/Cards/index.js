import Link from "next/link";
import React, { useContext, useState } from "react";
import dataContext from "../../context/dataContext";
import {
  Buttons,
  Card,
  CardsView,
  Img,
  Input,
  InputButtons,
  Space,
} from "./styles";

const Cards = () => {
  const { board, setBoard, setSelectedItem } = useContext(dataContext);
  const [originalBoard, setOriginalBoard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = board.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = () => {
    // lógica para filtrar jogadores com base no valor digitado no campo de entrada
    setOriginalBoard(board);
    const filteredPlayers = board.filter(
      (player) => player.username.includes(filterValue)
      // player.rank === Number(filterValue)
    );
    setBoard(filteredPlayers);
  };

  const handleClearFilter = () => {
    setFilterValue("");
    setBoard(originalBoard);
  };

  return (
    <>
      <Input
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        placeholder={"Filter by name"}
      />
      <InputButtons onClick={handleFilter}>Filter</InputButtons>
      <InputButtons onClick={handleClearFilter}>Clear</InputButtons>
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
                  <strong> Score: </strong>
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
    </>
  );
};

export default Cards;
