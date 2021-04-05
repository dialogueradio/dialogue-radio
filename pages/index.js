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
          <div className="mt-10 mb-20">
            <h2 className="mb-3 text-2xl font-bold text-center">ダイアログラジオとは？</h2>
            <p className="text-center text-lg">ゲストと私たちパーソナリティーが、人生について多方面からカジュアルに語ることで</p>
            <p className="text-center text-lg">多様な考え方、働き方、生き方の発信を目指しています</p>
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
