import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Header from '../components/header'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/graphcms'
import Head from 'next/head'

export default function Index({ posts, preview }) {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Member</title>
        </Head>
        <Container>
          <Header />
          <h2>Member Page</h2>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPosts(preview)) || []
  return {
    props: { posts, preview },
  }
}
