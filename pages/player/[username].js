import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { DivDetails, H2, Img, PDetails, UserName } from "./styles";

const Player = () => {
  const router = useRouter();
  const [player, setPlayer] = useState({});
  const userName = router.query.username;

  const getPlayerData = async () => {
    try {
      const res = await fetch(`https://api.chess.com/pub/player/${userName}`);
      const data = await res.json();
      setPlayer(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPlayerData();
  }, [userName]);

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

// |{
//   "avatar": "https://images.chesscomfiles.com/uploads/v1/user/19872960.df6ef125.200x200o.f2651789b1f6.jpeg",
//   "player_id": 19872960,
//   "@id": "https://api.chess.com/pub/player/igorkovalenko",
//   "url": "https://www.chess.com/member/igorkovalenko",
//   "name": "Igor Kovalenko",
//   "username": "igorkovalenko",
//   "title": "GM",
//   "followers": 619,
//   "country": "https://api.chess.com/pub/country/UA",
//   "location": "Kyiv",
//   "last_online": 1673975439,
//   "joined": 1416817838,
//   "status": "premium",
//   "is_streamer": false,
//   "verified": false
// }
