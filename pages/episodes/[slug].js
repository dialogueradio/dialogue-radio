import Container from 'components/container'
import Layout from 'components/layout'
import Header from 'components/header'
import Sidebar from 'components/sidebar'
import MainContent from 'components/main-content'
import InnerContainer from 'components/inner-container'
import PodcastPlatforms from 'components/podcast-platforms'
import EpisodeHeader from 'components/episode-header'
import EpisodeSubtitle from 'components/episode-subtitle'
import EpisodeShowNotes from 'components/episode-show-notes'
import EpisodeRelatedPosts from 'components/episode-related-posts'
import { getEpisode, getAllEpisodeWithSlug } from 'lib/graphcms'
import Head from 'next/head'

export default function Episode({ episode }) {
  return (
    <Layout>
      <Head>
        <title>{episode.title} | Dialogue Radio</title>
      </Head>
      <Container>
        <Header />
        <InnerContainer>
          <Sidebar>
            <PodcastPlatforms />
          </Sidebar>
          <MainContent>
            <div className="py-6 px-4 md:p-12 bg-white rounded-xl">
              <EpisodeHeader
                title={episode.title}
                date={episode.date}
                hosts={episode.hosts}
                guests={episode.guests}
                coverImage={episode.coverImage}
                audioFile={episode.audioFile}
              />
              <EpisodeSubtitle title="内容紹介" />
              <EpisodeShowNotes showNotes={episode.showNotes} />
              <EpisodeSubtitle title="関連記事" />
              <EpisodeRelatedPosts relatedPosts={episode.relatedPosts} />
            </div>
          </MainContent>
        </InnerContainer>
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
