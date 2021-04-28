import Container from 'components/container'
import Layout from 'components/layout'
import Header from 'components/header'
import Card from 'components/card'
import CardBody from 'components/card-body'
import { getMember, getAllMembersWithSlug } from 'lib/graphcms'
import Head from 'next/head'

export default function Member({ member }) {
  return (
    <Layout>
      <Head>
        <title>{member.name} | Dialogue Radio</title>
      </Head>
      <Container>
        <Header />
        <Card>
          <CardBody
            picture={member.picture}
            name={member.name}
            role={member.role}
            biography={member.biography}
            episodes={member.hosted}
          />
        </Card>
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
