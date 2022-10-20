import styles from '../../styles/dashboard.module.css'

const Offices = ( props ) => {
    
    return (
        <div className={styles.officeGrid}>
            <h3 className={styles.officeTitle}>{props.title}</h3>
            <h3 className={styles.officeAddress}>{props.address}</h3>
            {props.emissions != null ? (<div className={styles.subEmissionsTxt}>{props.emissions}</div>) 
            : (<div className={[styles.subEmissionsTxt, styles.txtNA].join(" ")}>NA</div>)}
            {props.emissions != null && <div className={styles.subHeader}>tCO&#8322;</div>}
        </div>
    )
}
export default Offices