import aboutStyles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={aboutStyles.aboutContainer}>
            <div className={aboutStyles.aboutSubContainer}>
                <h1 className={aboutStyles.aboutHeader}>About Us</h1>
                <p className={aboutStyles.aboutHeaderTxt}>Our team has deep expertise at the intersections of Climate, Energy, Finance and Technology from UC Berkeley</p>
                <div id="logo-container" className={aboutStyles.net0labsCertContainer}>
                <video id="berkeley-vid" className={aboutStyles.logoMask} autoPlay muted loop playsInline preload="none">
                    {/* <source src="/net0labs/net0labs_certification.mp4" type="video/mp4" /> */}
                    <source src="./partnerships/berkeley_logo.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video>
            </div>
                <br></br>
                <br></br>
                {/* <br></br> */}
                {/* <br></br> */}
                <h1 className={aboutStyles.aboutHeader}>Our Climate Mission</h1>
                <p className={aboutStyles.aboutHeaderTxt}>All Web3 companies, organizations, DAO's, etc... that have publicly launched tokens commit to the following 2 climate actions:</p>
                <div className={aboutStyles.aboutSubCommitContainer}>
                    <h2 className={aboutStyles.aboutMissionState}>Proof of NetZero</h2>
                    <p className={aboutStyles.aboutTxt}>Consistently measure, report and offset carbon footprints. All climate reports, assets, certifications should be tokenized and stored on-chain for absolute public transparency.</p>
                    <h2 className={aboutStyles.aboutMissionState}>NetZero 20X0 Pledge</h2>
                    <p className={aboutStyles.aboutTxt}>Draft accessible, credible, actionable and enforceable plans to become NetZero by 2050 or sooner (2030 being the most ambitious deadline). Ideally these plans would be tokenized and stored on-chain. To learn more please check out the  
                        <a target="_blank" href="https://www.un.org/en/climatechange/net-zero-coalition" style={{'text-decoration': "underline", "color": "aquamarine"}}> UN NetZero Coalition</a>
                    </p>
                </div>
            </div>
            <div id="net0labs-cert" className={aboutStyles.net0labsCertContainer}>
                <video id="net0labs-cert-vid" className={aboutStyles.net0labsMask} autoPlay muted loop playsInline preload="none">
                    {/* <source src="/net0labs/net0labs_certification.mp4" type="video/mp4" /> */}
                    <source src="./certification/net0labs_certification.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video>
            </div>
        </div>
        
    )
}