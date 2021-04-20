export default function ReumeButton({ bgValue, imgValue }) {
  return (
    <div className={`w-${bgValue} h-${bgValue} rounded-full flex items-center justify-center bg-accent`}>
      <img
      src="https://res.cloudinary.com/dialogue-radio/image/upload/v1617956066/triangle_hlz6c8.svg" 
      className={`w-${imgValue} h-auto ml-1`}
      />
    </div>
  )
}
