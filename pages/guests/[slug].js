import Container from 'components/container'
import Layout from 'components/layout'
import Header from 'components/header'
import { getGuest, getAllGuestsWithSlug } from 'lib/graphcms'

export default function Guest({ guest }) {
  return (
    <Layout>
      <Container>
        <Header />
        <>
        <p>{guest.name}</p>
        <p>{guest.biography}</p>
        </>
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
