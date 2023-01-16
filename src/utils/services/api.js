import axios from "axios";
import md5 from "md5";

const urlbase = "https://gateway.marvel.com";
const publickey = "8d123fafd63ee52492c7f9dd4c17984c";
const privatekey = "e059a613242bf2ead0e29da72a3054a297eca5d3";
const time = Number(new Date());

const marvelhash = md5(time+privatekey+publickey);
console.log(marvelhash)

const api = axios.create({
  baseURL: urlbase,
  params: {
    ts: time,
    apikey: publickey,
    hash: marvelhash,
  },
});

export default api;