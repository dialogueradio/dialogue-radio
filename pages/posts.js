import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Header from '../components/header'
import Layout from '../components/layout'
import HeroTitle from '../components/hero-title'
import { getAllPosts } from '../lib/graphcms'
import Head from 'next/head'

export default function Index({ posts, preview }) {
  const morePosts = posts
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Posts</title>
        </Head>
        <Container>
          <Header />
          <HeroTitle title="ブログ" />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
