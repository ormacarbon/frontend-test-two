import Link from "next/link";
import { useRouter } from "next/router";
import { X } from "phosphor-react";
import { useEffect } from "react";
import { Container } from "./styles";

export function MenuMobile({ isOpen, setIsOpen }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setIsOpen(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events, setIsOpen])  
  return (
    <Container>
      <X size={32} color={'white'} weight="bold" onClick={() => setIsOpen(false)} />
      <strong>
        <Link href="/">
          Home
        </Link>
      </strong>
      <strong>
        <Link href="/about">
          About
        </Link>
      </strong>
      <strong>
        <Link as='/gotItems?' href="/gotItems?page=2">
          Characters
        </Link>
      </strong>
    </Container>
  )
}