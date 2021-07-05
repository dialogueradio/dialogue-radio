import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'

export default function SnsButton({variant}) {
  
  const VARIANT_MAPS = {
    FILL:"text-primary group-hover:text-white",
    BLACK:"text-black group-hover:text-primary",
    WHITE:"text-white group-hover:text-white",
  };
  const FOCUS_MAPS = {
    FILL: "bg-white bg-opacity-40 hover:border-white",
    BLACK: "border-black hover:border-primary",
    WHITE: "border-white",
  };

  const facebook =  <FontAwesomeIcon icon={faFacebookF} className={classNames('w-2.5', VARIANT_MAPS[variant])} />
  const instagram =  <FontAwesomeIcon icon={faInstagram} className={classNames('w-5', VARIANT_MAPS[variant])} />
  const links = [
    { href: "https://www.facebook.com/DialogueRadio2020/",  element: facebook},
    { href: "https://www.instagram.com/dialogue_radio/", element: instagram},
  ].map(link => ({
    ...link,
    key: `sns-link-${link.href}-${link.element}`
      }));
  return (
    <div className="flex items-center justify-between w-30 md:mr-6">
      {links.map(({ href, element, key }) => (
        <a key={key} href={href} target="_blank">
          <span className={classNames('group flex justify-center items-center w-12 h-12 rounded-full border-2.5 duration-100 border-transparent', FOCUS_MAPS[variant])}>
            {element}
          </span>
        </a>
      ))}
    </div>
  )
}
