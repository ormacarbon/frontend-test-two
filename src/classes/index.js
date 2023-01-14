import axios from "axios";

export class CoinService {
    static async getCoin(id) {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
      return response.data;
    }
  }

export class ExchangeService {
    static async getExchange(id){
        const response = await axios.get(`https://api.coingecko.com/api/v3/exchanges/${id}`)
        return response.data
    }
}

export class NftDetailService{
  static async getNft(id){
    const response = await axios.get(`https://api.coingecko.com/api/v3/nfts/${id}`)
    return response.data
}
}