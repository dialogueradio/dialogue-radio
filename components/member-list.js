import MemberPreview from 'components/member-preview'

export default function MemberList({ members }) {
  return (
    <section className="grid grid-cols-2 gap-x-4 gap-y-5 md:gap-8 lg:grid-cols-5">
      {members.map((member) => (
        <MemberPreview
          key={member.slug}
          name={member.name}
          picture={member.picture}
          role={member.role}
          slug={member.slug}
        />
      ))}
    </section>
  )
}
