import { AppProps } from "next/app";
import { globalStyles } from "../src/styles/global";
import Logo from '../src/assets/logo.svg'
import { Container, Header } from "../src/styles/pages/app";
import Image from "next/image";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
          <Image src={Logo} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>

  )
}
