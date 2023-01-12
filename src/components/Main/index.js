import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import APIService from '../../services/APIService';
import { StyledMain, Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Main() {
  const [leagues, setLeagues] = useState([]);
  const { currentTheme } = useContext(ThemeContext);

  useEffect(() => {
    async function loadLeagues() {
      const response = await APIService.listLeagues();
      setLeagues([...response.data]);
    }

    loadLeagues();
  }, []);

  return (
    <StyledMain theme={currentTheme}>
      <h1>Ligas Profissionais</h1>

      <Container theme={currentTheme}>
        {leagues.map((league) => (
          <Link
            href={`/${league.name}/${league.id}`}
            theme={currentTheme}
            type="button"
            key={league.id}
          >
            <img
              src={league.logos.light}
              alt="logo-league"
            />
            {league.name}
          </Link>
        ))}
      </Container>
    </StyledMain>

  );
}
