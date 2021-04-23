import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from 'components/container'
import Sidebar from 'components/sidebar'
import MainContent from 'components/main-content'
import InnerContainer from 'components/inner-container'
import PostBody from 'components/post-body'
import PostList from 'components/post-list'
import PostInfo from 'components/post-info'
import Header from 'components/header'
import PostHeader from 'components/post-header'
import SectionSeparator from 'components/section-separator'
import Layout from 'components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/graphcms'
import PostTitle from 'components/post-title'
import Head from 'next/head'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <InnerContainer>
          <Sidebar>
            <PostInfo tags={post.tags} author={post.author} />
          </Sidebar>
          <MainContent>
            {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <>
                <article className="p-12 bg-white rounded-xl">
                  <Head>
                    <title>
                      {post.title}
                    </title>
                  </Head>
                  <PostHeader
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                  />
                  <PostBody content={post.content} />
                </article>
              </>
            )}
          </MainContent>
        </InnerContainer>
        <SectionSeparator />
        {morePosts.length > 0 && <PostList posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug()
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  }
}
