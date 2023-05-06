import { AppProps } from "next/app";
import { globalStyles } from "../src/styles/global";
import Logo from '../src/assets/logo.svg'
import { Container, Header } from "../src/styles/pages/app";
import Image from "next/image";
import { useRouter } from "next/router";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  function handleGoHome () {
    router.push('/')
  }

  return (
    <Container>
      <Header>
          <Image src={Logo} alt="" onClick={handleGoHome} className="img"/>
      </Header>
      <Component {...pageProps} />
    </Container>

  )
}
