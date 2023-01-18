import HttpClient from './utils/HttpClient';

class APIservice {
  constructor() {
    this.httpClient = new HttpClient('https://api-football-standings.azharimm.dev');
  }

  listLeagues() {
    return this.httpClient.get('/leagues');
  }

  listDetailsLeagueSelected(id) {
    return this.httpClient.get(`/leagues/${id}`);
  }

  listSeasonsLeagueSelected(id) {
    return this.httpClient.get(`/leagues/${id}/seasons`);
  }

  listStadingsOfSeason(id, season, orderBy = 'asc') {
    return this.httpClient.get(`/leagues/${id}/standings?season=${season}&sort=${orderBy}`);
  }
}

export default new APIservice();
