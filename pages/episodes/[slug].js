import Container from 'components/container'
import Layout from 'components/layout'
import Header from 'components/header'
import { getEpisode, getAllEpisodeWithSlug } from 'lib/graphcms'

export default function Episode({ episode }) {
  return (
    <Layout>
      <Container>
        <Header />
        <>
        <p>{episode.title}</p>
        </>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const episodes = await getAllEpisodeWithSlug()
  return {
    paths: episodes.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = await getEpisode(params.slug)
  return {
    props: { episode:data.episode }
  }
}
