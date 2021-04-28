import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import MainContent from '../components/main-content'
import InnerContainer from '../components/inner-container'
import HeroMessage from 'components/hero-message'
import EpisodeList from '../components/episode-list'
import PodcastPlatforms from '../components/podcast-platforms'
import { getAllEpisodes } from '../lib/graphcms'
import Head from 'next/head'

export default function Index({ episodes }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Dialogue Radio - 多様なライフストーリーに出会う場所「ダイアログラジオ」</title>
        </Head>
        <Container>
          <Header />
          <HeroMessage />
          <InnerContainer>
            <Sidebar>
              <PodcastPlatforms />
            </Sidebar>
            <MainContent>
              <EpisodeList episodes={episodes} />
            </MainContent>
          </InnerContainer>
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
