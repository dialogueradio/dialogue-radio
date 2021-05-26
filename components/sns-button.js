import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function SnsButton({variant}) {
  variant == "hero" ? variant = true : variant = false;
  
  const iconfStyle = variant ? "text-primary w-2.5 group-hover:text-white" :  "text-black w-2.5 group-hover:text-primary"
  const iconiStyle = variant ? "text-primary w-5 group-hover:text-white" : "text-black w-5 group-hover:text-primary"
  const bgStyle = "group flex justify-center items-center w-12 h-12 bg-white bg-opacity-40 rounded-full mr-5 border-2 duration-100 border-transparent hover:border-white"
  
  const facebook =  <FontAwesomeIcon icon={faFacebookF} className={iconfStyle}/>
  const instagram =  <FontAwesomeIcon icon={faInstagram} className={iconiStyle}/>
  const links = [
    { href: "https://www.facebook.com/DialogueRadio2020/",  element: facebook},
    { href: "https://www.instagram.com/dialogue_radio/", element: instagram},
  ]
  return (
    <div className="flex items-center justify-center">
      {links.map(({ href, element }) => (
        <a href={href} target="_blank">
          <span className={bgStyle}>
            {element}
          </span>
        </a>
      ))}
    </div>
  )
}
