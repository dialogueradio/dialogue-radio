export default function HeroHome() {
  return (
    <>
      <div className="hidden w-auto mx-auto mt-10 mb-12 text-center md:block w-min">
        <h2 className="w-auto inline-block text-primary bg-white mb-3 text-2xl font-bold py-2 px-2 md:w-max">ダイアログラジオとは？</h2>
        <p className="w-auto inline-block text-primary bg-white text-lg font-bold py-0.5 px-2 md:w-max">ゲストと私たちパーソナリティーが、人生について多方面からカジュアルに語ることで</p>
        <p className="w-auto inline-block text-primary bg-white text-lg font-bold py-0.5 px-2 mt-2 md:w-max">多様な考え方、働き方、生き方の発信を目指しています</p>
      </div>

      <div className="block text-left w-auto mx-auto md:hidden">
        <h2 className="w-auto inline-block text-primary bg-white mb-3 text-base font-bold py-2 px-2 md:w-max">ダイアログラジオとは？</h2>
        <p className="w-auto inline-block text-primary bg-white text-xs font-bold py-0.5 px-2">ゲストと私たちパーソナリティーが、人生について多方面からカジュアルに語ることで多様な考え方、働き方、生き方の発信を目指しています</p>
      </div>
    </>
  ) 
}
