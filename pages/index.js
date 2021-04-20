import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import HeroMessage from 'components/hero-message'
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
          <HeroMessage />
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
