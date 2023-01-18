import axios from "axios"
import md5 from "md5"

const publicKey = "3752a30b944c4367215cf9c6e306e722"
const privateKey = "985fcd78e46242c5bc7f53638692f69eb40a7875"

const ts = Number(new Date())

const hash = md5(ts + privateKey + publicKey)

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts: ts,
    apikey: publicKey,
    hash,
  },
})

export default api
