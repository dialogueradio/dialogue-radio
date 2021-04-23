export default function PostInfo({ author }) {
  return (
    <div className="sticky top-0 bg-white py-7 px-9 rounded-xl md:mr-9">
      <h3 className="text-black font-bold text-lg text-left py-3">目次</h3>
      <hr />
      <div className="mb-4">
        <h3 className="text-black font-bold text-lg text-left py-3">タグ</h3>
      </div>
      <hr />
      <div className="flex items-center mt-5">
        <img
          className="rounded-full border-2 border-primary w-12 h-12"
          src={author.picture.url}
          alt="Author"
          width={60}
          height={60}
        />
        <p className="ml-3">{author.name}</p>
      </div>
    </div>
  )
}
