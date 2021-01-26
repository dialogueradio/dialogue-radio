import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Index({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Episode</title>
        </Head>
        <Container>
          <Header />
          <h2>Top Page</h2>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  return {
    props: { preview },
  }
}
