class ApiService {
    constructor(url) {
      this.url = url;
    }

    async get(endpoint = "") {
      try {
        const response = await fetch(`${this.url}${endpoint}`);
        return await response.json();
      } catch (error) {
        throw error;
      }
    }

    async getPages() {
      const totalContent = 15

      try {
        const response = await fetch(`${this.url}`)
        const { totalCount } = await response.json()
        const totalPages = totalCount / totalContent
        return totalPages
      } catch (error) {
        throw error;
      }
    }
}

export default new ApiService('https://api.pokemontcg.io/v2/cards');