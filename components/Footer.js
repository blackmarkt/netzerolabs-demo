import Link from 'next/link'
import Image from 'next/Image'
import styles from '../styles/Footer.module.css'
import Twitter from '../public/social_media/twitter.png'

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerTxtContainer}>
                <p className={styles.footerTxt}>Made with &#10084; in Berkeley, CA</p>
            </div>
            <div className={styles.footerIcon}>
                <Link href="https://twitter.com/Net0Labs">
                    <a target="_blank">
                        <Image
                            src={Twitter}
                            alt='@Net0Labs'
                            height={'40px'}
                            width={'40px'}
                        />
                    </a>
                </Link>
            </div>
        </footer>
    )
}

export default Footer