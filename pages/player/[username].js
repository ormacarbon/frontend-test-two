import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";

const UserName = styled.div`
  width: 400px;
  margin-top: 16px;
  background-color: #f1faee;
  margin: auto;
  border: 1px solid;
`;

const Img = styled.img`
  width: 400px;
`;

const DivDetails = styled.div`
  display: flex;
  justify-content: space-between;
  background: gray;
`;

const PDetails = styled.p`
  margin-right: 2rem;
  margin-left: 2rem;
`;

const H2 = styled.h2`
  margin-top: 8px;
  margin-bottom: 8px;
`;
const Player = () => {
  const router = useRouter();
  const [player, setPlayer] = useState({});
  const userName = router.query.username;

  const getPlayerData = useCallback(async () => {
    try {
      const res = await fetch(`https://api.chess.com/pub/player/${userName}`);
      const data = await res.json();
      setPlayer(data);
    } catch (err) {
      console.log(err);
    }
  }, [userName]);

  useEffect(() => {
    getPlayerData();
  }, [userName, getPlayerData]);

  return (
    <Layout title={"Player Details"}>
      <UserName>
        <div>
          <Img
            src={
              player.avatar
                ? player.avatar
                : "https://www.chess.com/bundles/web/images/noavatar_l.84a92436.gif"
            }
            alt="Perfil image"
          />
          <H2>Name: {player.name}</H2>
        </div>
        <DivDetails>
          <div>
            <PDetails>
              <strong>Usename:</strong> {player.username}
            </PDetails>
            <PDetails>
              <strong>Title:</strong> {player.title}
            </PDetails>
          </div>
          <div>
            <PDetails>
              <strong>Location:</strong> {player.location}
            </PDetails>
            <PDetails>
              <strong>Followers:</strong> {player.followers}
            </PDetails>
          </div>
        </DivDetails>
      </UserName>
    </Layout>
  );
};

export default Player;
