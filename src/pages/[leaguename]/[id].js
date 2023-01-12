import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import APIService from '../../services/APIService';

export default function Id() {
  const path = useRouter();
  const { id } = path.query;
  const [detailsLeagueSelected, setDetailsLeagueSelected] = useState([]);
  useEffect(() => {
    async function loadLeagueSelected() {
      const detailsLeague = await APIService.listDetailsLeagueSelected(id);

      setDetailsLeagueSelected([detailsLeague]);
    }

    loadLeagueSelected();
  }, [id]);

  console.log(detailsLeagueSelected);

  return (
    <h1>
      {detailsLeagueSelected.map((league) => <p key={league.data.id}>{league.data.name}</p>)}
    </h1>
  );
}
