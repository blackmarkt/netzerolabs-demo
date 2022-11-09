import Link from 'next/link'
// import Image from 'next/Image'
import navStyles from '../styles/Nav.module.css'
// import Net0LabsLogo from '../public/net0labs/net0labs_header.png'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <Link href='/blockchains'>
            {/* <Image
                src={Net0LabsLogo}
                alt='Net0Labs'
                className={navStyles.net0LabsLogo}
            /> */}
            <img className={navStyles.imgHeader}
                height='70px'
                src='/net0labs/netzero_header_v3.png' 
                alt='NetZero' 
            />
        </Link>
        <div className={navStyles.headerRight}>
            <Link href="/">
                <button className={navStyles.buttonHead}>
                    Services
                </button>
            </Link>
            <div className={navStyles.subHeaderRight}>
                {/* <Link href="/blockchains">
                    <button className={[navStyles.buttonHead, navStyles.buttonAbout].join(" ")}>
                        Tracker
                    </button>
                </Link> */}
                <Link href="/about">
                    <button className={[navStyles.buttonHead, navStyles.buttonAbout].join(" ")}>
                        About
                    </button>
                </Link>
                <button className={navStyles.btnLaunch}>
                    Launching Soon
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Nav