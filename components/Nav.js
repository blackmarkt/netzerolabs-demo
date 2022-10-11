import Link from 'next/link'
import Image from 'next/Image'
import navStyles from '../styles/Nav.module.css'
import Net0LabsLogo from '../public/net0labs/net0labs_header.png'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <Link href='/'>
            <Image
                src={Net0LabsLogo}
                alt='Net0Labs'
            />
        </Link>
        <div className={navStyles.headerRight}>
            <Link href="/dashboard">
                <button className={navStyles.buttonHead}>
                    Dashboard
                </button>
            </Link>
            <Link href="/partners">
                <button className={navStyles.buttonHead}>
                    Providers
                </button>
            </Link>
            <div className={navStyles.btnLaunch}>
            Launching Soon
            </div>
        </div>
    </nav>
  )
}

export default Nav