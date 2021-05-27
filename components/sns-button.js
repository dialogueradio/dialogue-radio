import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function SnsButton({variant}) {
  variant == "hero" ? variant = true : variant = false;
  
  const iconfStyle = variant ? "text-primary w-2.5 group-hover:text-white" :  "text-black w-2.5 group-hover:text-primary"
  const iconiStyle = variant ? "text-primary w-5 group-hover:text-white" : "text-black w-5 group-hover:text-primary"
  
  const facebook =  <FontAwesomeIcon icon={faFacebookF} className={iconfStyle}/>
  const instagram =  <FontAwesomeIcon icon={faInstagram} className={iconiStyle}/>
  const links = [
    { href: "https://www.facebook.com/DialogueRadio2020/",  element: facebook},
    { href: "https://www.instagram.com/dialogue_radio/", element: instagram},
  ]
  return (
    <div className="flex items-center justify-between w-28 md:mr-6">
      {links.map(({ href, element }) => (
        <a href={href} target="_blank">
          <span className={`group flex justify-center items-center w-12 h-12 rounded-full border-2 duration-100 border-transparent ${ variant ? "bg-white bg-opacity-40  hover:border-white" : "border-black hover:border-primary"}`}>
            {element}
          </span>
        </a>
      ))}
    </div>
  )
}
