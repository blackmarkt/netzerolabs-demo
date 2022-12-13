import carbonPopStyle from '../../styles/CarbonPopup.module.css'

const CarbonCreditPopup = ({ isOpen }) => {
    // console.log('NAV HOVER ', isOpen)

    return (
        <>
            <div className={carbonPopStyle.carbonPopupContainer}>
                <h4 className={[carbonPopStyle.carbonAlertTxt, carbonPopStyle.pulsate].join(" ")}>ALERT: 
                    <a target="_blank" href="https://verra.org/verra-addresses-crypto-instruments-and-tokens/" className={carbonPopStyle.alertTxt}>
                        VERRA prohibits tokenization of credits (5/2022)
                    </a>
                </h4>
            </div>
        </>
    )
}

export default CarbonCreditPopup