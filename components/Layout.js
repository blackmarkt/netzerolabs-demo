import Nav from './Nav'
import Meta from './Meta'
import DemoHeader from './DemoHeader'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <DemoHeader />
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {/* <Header /> */}
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout