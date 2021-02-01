import Container from 'components/container'
import Layout from 'components/layout'
import Header from 'components/header'
import { getMember, getAllMembersWithSlug } from 'lib/graphcms'

export default function Member({ member }) {
  return (
    <Layout>
      <Container>
        <Header />
        <>
        <p>{member.name}</p>
        <p>{member.biography}</p>
        </>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const members = await getAllMembersWithSlug()
  return {
    paths: members.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = await getMember(params.slug)
  return {
    props: { member:data.member }
  }
}
