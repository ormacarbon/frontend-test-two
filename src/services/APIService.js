import HttpClient from './utils/HttpClient';

class APIservice {
  constructor() {
    this.httpClient = new HttpClient('https://api-football-standings.azharimm.dev/leagues');
  }

  listLeagues() {
    return this.httpClient.get();
  }

  listDetailsLeagueSelected(id) {
    return this.httpClient.get(`/${id}`);
  }

  listSeasonsLeagueSelected(id) {
    return this.httpClient.get(`/${id}/seasons`);
  }

  listStadingsOfSeason({ id, seasonSelected, orderBy = 'asc' }) {
    return this.httpClient.get(`/${id}/standings?season=${seasonSelected}&sort=${orderBy}`);
  }
}

export default new APIservice();
