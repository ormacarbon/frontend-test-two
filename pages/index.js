import Head from "next/head"
import { useEffect } from "react"
import axios from "axios"
import md5 from "md5"

export default function Home() {
  const baseUrl = "http://gateway.marvel.com/v1/public/characters?"

  const publicKey = "3752a30b944c4367215cf9c6e306e722"
  const privateKey = "985fcd78e46242c5bc7f53638692f69eb40a7875"

  const ts = Number(new Date())

  const hash = md5(ts + privateKey + publicKey)

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Head>
        <title>Marvel API</title>
      </Head>
      <div>
        <h1>Marvel</h1>
      </div>
    </>
  )
}
