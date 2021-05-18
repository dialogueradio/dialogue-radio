import Container from 'components/container'
import Layout from 'components/layout'
import Header from 'components/header'
import Card from 'components/card'
import CardBody from 'components/card-body'
import { getStoryteller, getAllStorytellersWithSlug } from 'lib/graphcms'
import Head from 'next/head'

export default function Storyteller({ storyteller }) {
  return (
    <Layout>
      <Head>
        <title>{storyteller.name} | Dialogue Radio</title>
      </Head>
      <Container>
        <Header />
        <Card>
          <CardBody
            picture={storyteller.picture}
            name={storyteller.name}
            occupation={storyteller.occupation}
            biography={storyteller.biography}
            episodes={storyteller.appearedOn}
          />
        </Card>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const storytellers = await getAllStorytellersWithSlug()
  return {
    paths: storytellers.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = await getStoryteller(params.slug)
  return {
    props: { storyteller:data.storyteller }
  }
}
