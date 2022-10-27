import aboutStyles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={aboutStyles.aboutContainer}>
                <div className={aboutStyles.aboutSubContainer}>
                    <h1 className={aboutStyles.aboutHeader}>Our Web3 Climate Mission</h1>
                    <p className={aboutStyles.aboutHeaderTxt}>All Web3 companies, organizations, DAO's, etc... that have publicly launched tokens commit to the following 2 climate actions:</p>
                    <div className={aboutStyles.aboutSubContainer}>
                        <h2 className={aboutStyles.aboutMissionState}>NetZero 20x0 Pledge</h2>
                        <p className={aboutStyles.aboutTxt}>Draft accessible, credible, actionable and enforceable plans to become NetZero by 2050 or sooner (2030 being the most ambitious deadline). Ideally these plans would be tokenized and stored on-chain. To learn more please check out the  
                            <a target="_blank" href="https://www.un.org/en/climatechange/net-zero-coalition" style={{'text-decoration': "underline", "color": "aquamarine"}}> UN NetZero Coalition</a>
                        </p>
                        <h2 className={aboutStyles.aboutMissionState}>Carbon Neutral Commitment</h2>
                        <p className={aboutStyles.aboutTxt}>Consistently measure, report and offset carbon footprints. Ideally all reports, assets, certifications would be tokenized and stored on-chain</p>
                    </div>
                </div>
        </div>
        
    )
}