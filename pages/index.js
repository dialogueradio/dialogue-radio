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
          <div className="w-auto mx-auto mt-10 mb-12 text-center md:w-min">
            <h2 className="w-auto inline-block text-primary bg-white mb-3 text-2xl font-bold py-2 px-2 md:w-max">ダイアログラジオとは？</h2>
            <p className="w-auto inline-block text-primary bg-white text-lg font-bold py-0.5 px-2 md:w-max">ゲストと私たちパーソナリティーが、人生について多方面からカジュアルに語ることで</p>
            <p className="w-auto inline-block text-primary bg-white text-lg font-bold py-0.5 px-2 mt-2 md:w-max">多様な考え方、働き方、生き方の発信を目指しています</p>
          </div>
          <div className="md:flex">
            <div className="md:w-1/4">
              <PodcastPlatforms />
            </div>
            <div className="md:w-3/4">
              <Episodes episodes={episodes} />
            </div>
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
