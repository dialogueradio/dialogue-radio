import SnsButton from './sns-button'

export default function HeroMessage() {
  return (
    <>
      <div className="relative">
        <div className="w-auto mr-auto md:ml-52 md:w-min md:mb-12">
          <h2 className="w-auto inline-block text-primary bg-white mb-3 text-base font-bold py-2 px-5 md:text-2xl md:w-max md:ml-5">ダイアログラジオとは？</h2>
          <div className="flex items-center">
            <p className="w-auto inline-block text-primary bg-white text-sm font-bold py-2 px-3 md:w-max md:max-w-2xl md:text-lg md:leading-6">ゲストと私たちパーソナリティーが、人生について多方面からカジュアルに語ることで多様な考え方、働き方、生き方の発信を目指しています</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden md:flex">
          <SnsButton variant={"hero"} />
        </div>
      </div>
    </>
  ) 
}
