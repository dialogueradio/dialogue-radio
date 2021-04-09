import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Episodes from '../components/episodes'
import PodcastPlatforms from '../components/podcast-platforms'
import { getAllEpisodes } from '../lib/graphcms'
import Head from 'next/head'

export default function Index({ episodes }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Episodes</title>
        </Head>
        <Container>
          <Header />
          <div className="w-min mx-auto mt-10 mb-12 text-center">
            <h2 className="w-max inline-block text-primary bg-white mb-3 text-2xl font-bold py-2 px-2">ダイアログラジオとは？</h2>
            <p className="w-max inline-block text-primary bg-white text-lg font-bold py-0.5 px-2">ゲストと私たちパーソナリティーが、人生について多方面からカジュアルに語ることで</p>
            <p className="w-max inline-block text-primary bg-white text-lg font-bold py-0.5 px-2 mt-2">多様な考え方、働き方、生き方の発信を目指しています</p>
          </div>
          <div className="flex">
            <PodcastPlatforms />
            <Episodes episodes={episodes} />
          </div>
        </Container>
      </Layout>
    </>
  )
}
export async function getStaticProps() {
  const episodes = await getAllEpisodes()
  return {
    props: { episodes },
  }
}
