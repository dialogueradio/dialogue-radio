import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import HeroTitle from '../components/hero-title'
import PostList from '../components/post-list'
import { getAllPosts } from '../lib/graphcms'
import Head from 'next/head'

export default function Index({ posts, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>ブログ | Dialogue Radio</title>
        </Head>
        <Container>
          <Header />
          <HeroTitle title="ブログ" />
          {posts.length > 0 && <PostList posts={posts} />}
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
