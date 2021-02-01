import Container from '../components/container'
import Header from '../components/header'
import { getAllMembers } from '../lib/graphcms'
import Head from 'next/head'
import Link from 'next/link'

export default function Members({ members }) {
  return (
    <>
        <Head>
          <title>Members</title>
        </Head>
        <Container>
          <Header />
          <section className="grid grid-cols-1 md:grid-cols-4 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-25 mb-32">
          {members.map((member) => (
             <>
               <div>
               <img src={member.picture.url} className="w-auto h-auto mb-5 border-4 border-black rounded-full" alt={member.name} />
               <h3 className="mb-3 text-2xl text-center leading-snug">
                <Link as={`/members/${member.slug}`} href="/members/[member.slug]">
                  <a className="hover:underline">{member.name}</a>
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
  const members = await getAllMembers()
  return {
    props: { members },
  }
}
