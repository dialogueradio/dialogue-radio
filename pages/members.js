import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import HeroTitle from '../components/hero-title'
import { getAllMembers } from '../lib/graphcms'
import Head from 'next/head'
import Link from 'next/link'

export default function Members({ members }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Members</title>
        </Head>
        <Container>
          <Header />
          <HeroTitle title="メンバー" />
          <section className="grid grid-cols-4 gap-40">
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
