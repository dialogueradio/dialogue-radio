function block(person) {
  return (
    <div className="flex flex-col items-center mr-3 md:mr-7">
      <img
        className="h-11 border-2 rounded-full border-primary w-11 md:w-16 md:h-16"
        src={person.picture.url}
        alt="Picture of the host"
        width={70}
        height={70}
      />
      <p className="mt-2 text-xs md:text-base">{person.name}</p>
    </div>
  )
}

export default function EpisodeHostGuest({ hosts, guests }) {
  return (
    <div className="flex">
        {hosts.map((host) => (
          block(host)
       ))}
        {guests.map((guest) => (
          block(guest)
        ))}
    </div>
  ) 
}
