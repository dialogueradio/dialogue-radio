export default function PostTitle({ children }) {
  return (
    <h1 className="mb-5 text-xl font-bold leading-snug tracking-tighter text-left md:text-4xl lg:text-5xl md:leading-none md:text-left">
      {children}
    </h1>
  )
}
