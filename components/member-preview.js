import Link from 'next/link'

export default function MemberPreview({
  name,
  picture,
  role,
  slug
}) {
  return (
    <Link as={`/members/${slug}`} href="/members/[slug]">
      <a>
        <div className="pt-8 bg-white pb-9 rounded-xl duration-150 hover:shadow-xl">
          <img src={picture.url} className="mx-auto mb-5 border-4 rounded-full w-28 h-28 border-primary md" alt={name} />
          <h3 className="mb-3 text-xl font-bold leading-snug text-center">
            {name}
          </h3>
          <p className="font-bold text-center text-gray4">{role}</p>
        </div>
      </a>
    </Link>
  )
}
