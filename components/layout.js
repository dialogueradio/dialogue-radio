import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>
          <div className="relative z-0 bg-yellow-50 pb-20 min-h-screen">
            <div className="absolute top-0 left-0 right-0 -z-10 bg-wave"></div>
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
