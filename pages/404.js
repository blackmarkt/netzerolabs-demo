import styles from '../styles/Errors.module.css'

export default function Custom404() {
    return (
        <div className={styles.errorMsgContainer}>
                <div className={styles.errorMsgSubContainer}>
                    <h1 className={styles.errorMsg}>404 | Page Not Found</h1>
                </div>
        </div>
        
    )
}