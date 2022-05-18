import StorytellerPreview from 'components/storyteller-preview'

export default function MoreStories({ storytellers }) {
  return (
    <section className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
      {storytellers.map((storyteller) => (
        <StorytellerPreview
          key={storyteller.slug}
          name={storyteller.name}
          picture={storyteller.picture}
          role={storyteller.occupation}
          slug={storyteller.slug}
        />
      ))}
    </section>
  )
}
