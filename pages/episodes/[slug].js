import React, { useContext, useEffect } from "react";
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
import { PlayerContext } from 'context/AudioPlayer';
import { getEpisode, getAllEpisodeWithSlug } from 'lib/graphcms'
import Head from 'next/head'

export default function Episode({ currentEpisode }) {

  const {
    state: { playing, episode },
    dispatch
  } = useContext(PlayerContext);

  useEffect(() => {
    if (!episode) {
      dispatch({ type: "setEpisode", payload: currentEpisode });
    }
  }, []);
  
  return (
    <Layout>
      <Head>
        <title>{currentEpisode.title} | Dialogue Radio</title>
      </Head>
      <Container>
        <Header />
          <InnerContainer>
            <Sidebar>
              <PodcastPlatforms />
            </Sidebar>
            <MainContent>
              <div className="px-4 py-6 bg-white md:p-12 rounded-xl">
                <EpisodeHeader
                  title={currentEpisode.title}
                  date={currentEpisode.date}
                  audioDuration={currentEpisode.audioDuration}
                  hosts={currentEpisode.hosts}
                  guests={currentEpisode.storytellers}
                  coverImage={currentEpisode.coverImage}
                  audioFile={currentEpisode.audioFile}
                />
                <EpisodeSubtitle title="内容紹介" />
                <EpisodeShowNotes showNotes={currentEpisode.showNotes} />
                <EpisodeSubtitle title="関連記事" />
                <EpisodeRelatedPosts relatedPosts={currentEpisode.relatedPosts} />
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
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const data = await getEpisode(params.slug)
  return {
    props: { currentEpisode:data.episode }
  }
}
