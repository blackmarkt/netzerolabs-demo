import Nav from './Nav'
import Meta from './Meta'
import DemoHeader from './DemoHeader'
import Footer from './Footer'
import layoutStyles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <DemoHeader />
      <Meta />
      <Nav />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>
          {/* <Header /> */}
          {children}
        </main>  
      </div>
      <Footer />
    </>
  )
}

export default Layout