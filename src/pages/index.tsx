import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Index() {
  const { push } = useRouter()

  useEffect(() => {
    push('/bm-play/home')
  }, [])
}
