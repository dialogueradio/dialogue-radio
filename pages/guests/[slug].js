import Container from 'components/container'
import Layout from 'components/layout'
import Header from 'components/header'
import Card from 'components/card'
import CardBody from 'components/card-body'
import { getGuest, getAllGuestsWithSlug } from 'lib/graphcms'

export default function Guest({ guest }) {
  return (
    <Layout>
      <Container>
        <Header />
        <Card>
          <CardBody
            picture={guest.picture}
            name={guest.name}
            biography={guest.biography}
            episodes={guest.appearedOn}
          />
        </Card>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const guests = await getAllGuestsWithSlug()
  return {
    paths: guests.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = await getGuest(params.slug)
  return {
    props: { guest:data.guest }
  }
}
