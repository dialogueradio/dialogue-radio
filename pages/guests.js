import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import HeroTitle from '../components/hero-title'
import GuestList from '../components/guest-list'
import { getAllGuests } from '../lib/graphcms'
import Head from 'next/head'

export default function Guests({ guests }) {
  return (
    <>
      <Layout>
        <Head>
          <title>ゲスト | Dialogue Radio</title>
        </Head>
        <Container>
          <Header />
          <HeroTitle title="ゲスト" />
          <GuestList guests={guests} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const guests = await getAllGuests()
  return {
    props: { guests },
  }
}
