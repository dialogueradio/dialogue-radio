export default function PostInfo({ tags }) {
  return (
    <div className="bg-white py-7 px-9 rounded-xl md:mr-9">
      <h3 className="text-black font-bold text-lg text-left py-3">目次</h3>
      <h3 className="text-black font-bold text-lg text-left py-3">タグ</h3>
      <ul>
        {tags.map((tag) => (
          <li className="inline-block text-base px-2 py-1 mb-2.5 mr-2.5 bg-gray1 text-gray4 rounded-md tag-symbol">{tag.name}</li>
        ))}
      </ul>
    </div>
  )
}
