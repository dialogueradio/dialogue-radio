import Link from 'next/link'

export default function MemberPreview({
  name,
  picture,
  slug
}) {
  return (
    <div>
      <img src={picture.url} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <h3 className="mb-3 text-3xl leading-snug">
        <Link as={`/members/${slug}`} href="/members/[slug]">
          <a className="hover:underline">{name}</a>
        </Link>
      </h3>
    </div>
  )
}
