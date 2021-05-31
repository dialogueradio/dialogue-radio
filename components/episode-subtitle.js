export default function EpisodeSubtitle({ title, firstOne }) {
  return (
    <h3 className={`md:text-lg font-bold text-gray-600 mb-4 d-symbol ${ firstOne ? "mt-0" : "mt-6"}`}>{title}</h3>
  )
}
