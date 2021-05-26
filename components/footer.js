import Container from './container'
import SnsButton from './sns-button'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="py-14 flex justify-between flex-col lg:flex-row items-center">
          <a
            href="https://forms.gle/QtJQ4iXsFish9BiD7"
            target="_blank"
            className="px-5 py-4 bg-black text-white font-bold rounded-md">
            お便り・お問い合わせ
          </a>
          <SnsButton />
        </div>
      </Container>
    </footer>
  )
}
