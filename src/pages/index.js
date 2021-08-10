import Head from 'next/head'
import { Header } from '../Components/Header/Index';
import { MainContent } from '../Components/MainContent/Index';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Guilherme Silva</title>
      </Head>

      <Header/>
      <MainContent/>

    </div>
  )
}
