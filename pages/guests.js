import Container from '../components/container'
import Header from '../components/header'
import { getAllGuests } from '../lib/graphcms'
import Head from 'next/head'
import Link from 'next/link'

export default function Guests({ guests }) {
  return (
    <>
        <Head>
          <title>Guests</title>
        </Head>
        <Container>
          <Header />
          <section className="grid grid-cols-1 md:grid-cols-4 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-25 mb-32">
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
    </>
  )
}

export async function getStaticProps() {
  const guests = await getAllGuests()
  return {
    props: { guests },
  }
}
