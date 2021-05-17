import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function HeroMessage() {
  return (
    <>
      <div className="w-auto mx-auto md:w-min md:mb-12">
        <h2 className="w-auto inline-block text-primary bg-white mb-3 text-base font-bold py-2 px-5 md:text-2xl md:w-max">ダイアログラジオとは？</h2>
        <div className="flex items-center">
          <p className="w-auto inline-block text-primary bg-white text-sm font-bold py-2 px-3 md:w-max md:max-w-xl md:text-lg md:leading-6">ゲストと私たちパーソナリティーが、人生について多方面からカジュアルに語ることで多様な考え方、働き方、生き方の発信を目指しています</p>
          <div className="pl-10 hidden md:flex">
            <a href="https://www.facebook.com/DialogueRadio2020/" target="_blank">
              <span className="flex justify-center items-center w-12 h-12 bg-white bg-opacity-25 rounded-full mr-5 border-2 duration-100 border-transparent hover:border-white">
                <FontAwesomeIcon icon={faFacebookF} className="text-white w-2.5"/>
              </span>
            </a>
            <a href="https://www.instagram.com/dialogue_radio/" target="_blank">
              <span className="flex justify-center items-center w-12 h-12 bg-white bg-opacity-25 rounded-full border-2 duration-100 border-transparent hover:border-white">
                <FontAwesomeIcon icon={faInstagram} className="text-white h-5"/>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  ) 
}
