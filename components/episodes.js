import Link from 'next/link'

function resumeButton(bgValue, imgValue){
  const bgSize = bgValue
  const imgSize = imgValue
  return (
    <div className={`w-${bgSize} h-${bgSize} rounded-full flex items-center justify-center bg-accent`}>
      <img
        src="https://res.cloudinary.com/dialogue-radio/image/upload/v1617956066/triangle_hlz6c8.svg" 
        className={`w-${imgSize} h-auto ml-1`}
      />
    </div>
  )
}

export default function Episode({ episodes }) {
  return (
    <div>
      {episodes.map((episode) => (
        <Link as={`/episodes/${episode.slug}`} href="/episodes/[episode.slug]">
          <a>
            <div className="p-6 mb-10 bg-white rounded-xl md:flex justify-between">
              <div>
                <p className="text-base font-bold text-gray-300">{episode.date}</p>
                <div className="flex">
                  <div className="mr-2 md:hidden">
                    {resumeButton(8, 3)}
                  </div>
                  <h3 className="text-2xl font-bold leading-snug lg:mt-1 mb-3">{episode.title}</h3>
                </div>
                <p className="float-left w-3/4 mr-2 md:float-none lg:w-auto">{episode.description}</p>
              </div>
              <div>
                <div className="flex items-end">
                  <div className="hidden md:flex mr-12 mb-2">
                    {resumeButton(14, 5)}
                  </div>
                  <div>
                    <img
                      className="rounded-md"
                      src={episode.coverImage.url}
                      alt="Picture of the author"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
