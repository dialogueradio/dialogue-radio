function block(person) {
  return (
    <div className="flex flex-col items-center mr-7">
      <img
        className="rounded-full border-2 border-primary w-16 h-16"
        src={person.picture.url}
        alt="Picture of the host"
        width={70}
        height={70}
      />
      <p className="mt-2">{person.name}</p>
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
