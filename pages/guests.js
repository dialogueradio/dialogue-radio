import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import HeroTitle from '../components/hero-title'
import { getAllGuests } from '../lib/graphcms'
import Head from 'next/head'
import Link from 'next/link'

export default function Guests({ guests }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Guests</title>
        </Head>
        <Container>
          <Header />
          <HeroTitle title="ゲスト" />
          <section className="grid grid-cols-4 gap-40">
          {guests.map((guest) => (
             <>
               <div>
               <img src={guest.picture.url} className="w-auto h-auto mb-5 border-4 border-black rounded-full" alt={guest.name} />
               <h3 className="mb-3 text-2xl text-center leading-snug">
                <Link as={`/guests/${guest.slug}`} href="/guests/[guest.slug]">
                  <a className="hover:underline">{guest.name}</a>
                </Link>
               </h3>
               </div>
             </>
          ))}
          </section>
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
