import Header from './Header/Header'
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1200px]">
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout