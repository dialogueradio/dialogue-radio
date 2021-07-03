import SnsButton from './sns-button'

export default function HeroMessage() {
  return (
    <>
      <div className="relative">
        <div className="w-auto mr-auto xl:ml-52 md:w-min xl:mb-12">
          <h2 className="inline-block w-auto px-5 py-2 mb-3 text-base font-bold bg-white text-primary md:text-2xl xl:w-max xl:ml-5">ダイアログラジオとは？</h2>
          <div className="flex items-center">
            <p className="inline-block w-auto px-3 py-2 text-sm font-bold bg-white text-primary md:w-max md:max-w-2xl md:text-lg md:leading-6">ゲストと私たちパーソナリティーが、人生について多方面からカジュアルに語ることで多様な考え方、働き方、生き方の発信を目指しています</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden xl:flex">
          <SnsButton variant={"hero"} />
        </div>
      </div>
    </>
  ) 
}
