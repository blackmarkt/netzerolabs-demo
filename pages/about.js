import aboutStyles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={aboutStyles.aboutContainer}>
                <div className={aboutStyles.aboutSubContainer}>
                    <h2 className={aboutStyles.aboutHeader}>Our Web3 Mission</h2>
                    <p>All Web3 companies, organizations, DAO's, etc... that have publicly launched tokens commit to the following 2 climate actions:</p>
                    <div className={aboutStyles.aboutSubContainer}>
                        <h3 className={aboutStyles.aboutMissionState}>NetZero 20X0 Pledges</h3>
                        <p>Draft accessible, credible, actionable and enforceable plans to become NetZero by 2050 or sooner. Ideally these plans would be tokenized and stored on-chain </p>
                        <h3 className={aboutStyles.aboutMissionState}>Carbon Neutral Commitment</h3>
                        <p>Consistently measure, report and offset carbon footprints. Ideally all reports, assets, certifications would be tokenized and stored on-chain</p>
                    </div>
                </div>
        </div>
        
    )
}