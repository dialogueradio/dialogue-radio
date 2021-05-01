async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID)
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getAllEpisodes() {
  const data = await fetchAPI(
    `
    {
      episodes(orderBy: date_DESC, first: 20) {
        title
        episodeNumber
        description
        date
        slug
        coverImage {
          url
        }
      }
    }`,
  )
  return data.episodes
}

export async function getAllMembers() {
  const data = await fetchAPI(
    `
    {
      members(orderBy: number_ASC, first: 10){
        id
        name
        slug
        biography
        role
        picture {
          url
        }
        number
      }
    }`,
  )
  return data.members
}

export async function getAllGuests() {
  const data = await fetchAPI(
    `
    {
      guests {
        name
        slug
        biography
        picture {
          url
        }
      }
    }`,
  )
  return data.guests
}

export async function getAllMembersWithSlug() {
  const data = await fetchAPI(`
    {
      members {
        slug
      }
    }
  `)
  return data.members
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts {
        slug
      }
    }
  `)
  return data.posts
}

export async function getAllGuestsWithSlug() {
  const data = await fetchAPI(`
    {
      guests {
        slug
      }
    }
  `)
  return data.guests
}

export async function getAllEpisodeWithSlug() {
  const data = await fetchAPI(`
    {
      episodes {
        slug
      }
    }
  `)
  return data.episodes
}

export async function getAllPosts(preview) {
  const data = await fetchAPI(
    `
    {
      posts(orderBy: date_DESC, first: 20) {
        title
        slug
        excerpt
        date
        coverImage {
          url(transformation: {
            image: {
              resize: {
                fit:crop,
                width:2000,
                height:1000
              }
            }
          })
        }
        author {
          name
          picture {
            url(transformation: {
              image: {
                resize: {
                  width:100,
                  height:100,
                  fit:crop
                }
              }
            })
          }
        }
      }
    }
  `,
    { preview }
  )
  return data.posts
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(stage: $stage, where: {slug: $slug}) {
        title
        slug
        content {
          html
        }
        date
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
        tags {
          name
        }
      }
      morePosts: posts(orderBy: date_DESC, first: 2, where: {slug_not_in: [$slug]}) {
        title
        slug
        excerpt
        date
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
      }
    }
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        slug,
      },
    }
  )
  return data
}

export async function getMember(slug) {
  const data = await fetchAPI(
    `
    query MemberBySlug($slug: String!) {
      member(where: {slug: $slug}) {
        name
        biography
        role
        picture {
          url
        }
        hosted(orderBy: date_DESC) {
          title
          slug
        }
      }
    }
  `,
    {
      variables: {
        slug,
      },
    }
  )
  return data
}

export async function getGuest(slug) {
  const data = await fetchAPI(
    `
    query GuestBySlug($slug: String!) {
      guest(where: {slug: $slug}) {
        name
        biography
        picture {
          url
        }
        appearedOn(orderBy: date_DESC) {
          title
          slug
        }
      }
    }
  `,
    {
      variables: {
        slug,
      },
    }
  )
  return data
}

export async function getEpisode(slug) {
  const data = await fetchAPI(
    `
    query EpisodeBySlug($slug: String!) {
      episode(where: {slug: $slug}) {
        title
        date
        showNotes
        coverImage {
          url
        }
        audioFile {
          url
        }
        hosts {
          name
          picture {
            url
          }
        }
        guests {
          name
          picture {
            url
          }
        }
        relatedPosts {
          title
          date
          excerpt
          slug
          coverImage {
            url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
          }
        }
      }
    }
  `,
    {
      variables: {
        slug,
      },
    }
  )
  return data
}
