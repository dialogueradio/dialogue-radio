import React, { useContext, useEffect } from "react";
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import HeroTitle from '../components/hero-title'
import MemberList from '../components/member-list'
import { getAllMembers } from '../lib/graphcms'
import { PlayerContext } from "context/AudioPlayer";
import Head from 'next/head'

export default function Members({ members, currentEpisode }) {
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
    <>
      <Layout>
        <Head>
          <title>メンバー | Dialogue Radio</title>
        </Head>
        <Container>
          <Header />
          <HeroTitle title="メンバー" />
          <MemberList members={members} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const members = await getAllMembers()
  return {
    props: { members },
  }
}
