import Container from 'components/container'
import Layout from 'components/layout'
import Header from 'components/header'
import PodcastPlatforms from 'components/podcast-platforms'
import EpisodeHeader from 'components/episode-header'
import EpisodeSubtitle from 'components/episode-subtitle'
import EpisodeShowNotes from 'components/episode-show-notes'
import EpisodeRelatedPosts from 'components/episode-related-posts'
import { getEpisode, getAllEpisodeWithSlug } from 'lib/graphcms'

export default function Episode({ episode }) {
  return (
    <Layout>
      <Container>
        <Header />
        <div className="md:flex">
          <div className="md:w-1/4">
            <PodcastPlatforms />
          </div>
          <div className="md:w-3/4">
            <div className="p-12 bg-white rounded-xl">
              <EpisodeHeader
                title={episode.title}
                hosts={episode.hosts}
                guests={episode.guests}
                coverImage={episode.coverImage}
              />
              <EpisodeSubtitle>内容紹介</EpisodeSubtitle>
              <EpisodeShowNotes showNotes={episode.showNotes} />
              <EpisodeSubtitle>関連記事</EpisodeSubtitle>
              <EpisodeRelatedPosts relatedPosts={episode.relatedPosts} />
            </div>
          </div>
        </div>
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
