import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import HeroTitle from '../components/hero-title'
import StorytellerList from '../components/storyteller-list'
import { getAllStorytellers } from '../lib/graphcms'
import Head from 'next/head'

export default function Storytellers({ storytellers }) {
  return (
    <>
      <Layout>
        <Head>
          <title>ストーリーテラー | Dialogue Radio</title>
        </Head>
        <Container>
          <Header />
          <HeroTitle title="ストーリーテラー" />
          <StorytellerList storytellers={storytellers} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const storytellers = await getAllStorytellers()
  return {
    props: { storytellers },
  }
}
