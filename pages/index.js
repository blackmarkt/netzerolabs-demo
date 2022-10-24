import { useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PopupButton } from '@typeform/embed-react'

export default function Home() {
  const [email, setEmail] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let currentDT = new Date().toLocaleString() + '';
      let res = await fetch("https://api.airtable.com/v0/appW0iw0c0MpSsPPj/Table%201?api_key=keyr0ErVOEIbCxZtx", {
          method: "POST",
          body: JSON.stringify({
            fields: {
              Email: email,
              Date: currentDT,
            }
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setEmail("");
        console.log('Email SUCCESS');
      } else {
        console.log('Email FAIL 1');
      }
    } catch(err) {
      console.log('Email FAIL 2');
    }
  }

  return (
    <div>
        <main className={styles.main}>
          <div className={styles.homeImageContainer}>
            <div className={styles.homeImageLeft}>
              <div id="vid-earth-nft" className={styles.earthContainer}>
                <video id="earthNFT" className={styles.earthMask} autoPlay muted loop playsInline preload="none">
                  <source src="/net0labs/net0labs_certification.mp4" type="video/mp4" />
                    {/* <source src="movie.ogg" type="video/ogg" /> */}
                </video>
              </div>
            </div>
            <div className={styles.homeImageRight}>
              <h3 className={styles.imgTxtCarbontop}>We Help Companies Become</h3>
              <h1 className={styles.imgTxtCarbonmid}>Climate Compliant</h1>
              <h3 className={styles.imgTxtCarbonlow}>Join The Global Movement</h3>
              <div className={styles.homeImageBtn}>
                <form id="waitlist-form" onSubmit={handleSubmit}>
                  <input type='text' 
                        name='email-address-txt' 
                        id='email-txt' 
                        placeholder='Your Email' 
                        className={styles.emailWaitlistTxt}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                  <input type="submit" value="Join Waitlist" className={styles.btnPledge}/>
                </form>
                {/* <PopupButton id="ltqzeI0j" className={styles.surveyBtn}>
                  <div className={styles.pledgeButton}>
                  Join the Waitlist
                  </div>
                </PopupButton> */}
              </div>
            </div>
          </div>
          <div className={styles.nftContainer}>
            <h3 className={styles.SignHeadTxt}>Carbon Offsets</h3>
            <div id="vid1" className={styles.videoContainer}>
                <video id="vid_carbon_built" className={styles.videoMask} autoPlay muted loop playsInline preload="none">
                    <source src="/nfts/carbon_built_nft.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video>
            </div>
            <div id="vid1" className={styles.videoContainer}>
                <video id="vid_vesta_project" className={styles.videoMask} autoPlay muted loop playsInline preload="none">
                    <source src="/nfts/vesta_project_nft.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video>
            </div>
            <div id="vid1" className={styles.videoContainer}>
                <video id="vid_charm_industrial" className={styles.videoMask} autoPlay muted loop playsInline preload="none">
                    <source src="/nfts/charm_industrial_nft.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video>
            </div>
            <div id="vid1" className={styles.videoContainer}>
                <video id="vid_charm_industrial" className={styles.videoMask} autoPlay muted loop playsInline preload="none">
                    <source src="/nfts/solar_nft.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video>
            </div>
          </div>
          <div className={styles.faqContainer}>
            <div className={styles.faqInnerContainer}>
              <h2 className={styles.headerBand}>Carbon Neutral</h2>
              <h3 className={styles.headerTxt}>Take a leadership role in fighting Climate Change</h3>
              <h1 className={styles.headerStatementRight}>On-Chain Carbon Accounting</h1>
              <p className={styles.headerFootnoteRight}>Scopes 1, 2 & 3</p>
              <h1 className={styles.headerStatementRight}>Carbon Offsets & Futures</h1>
            </div>
          </div>
          <div className={styles.homeImageContainer}>
            <div className={styles.homeImageLeft}>
              <div id="net0labs-pledge" className={styles.net0labsPledgeContainer}>
                <video id="net0labs-vid" className={styles.net0labsMask} autoPlay muted loop playsInline preload="none">
                    {/* <source src="/net0labs/net0labs_certification.mp4" type="video/mp4" /> */}
                    <source src="./net0labs/net_zero_nft.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video>
              </div>
            </div>
            <div className={styles.homeImageRight}>
              <h3 className={styles.imageTextTop}>Join Over 300 Companies</h3>
              <h1 className={styles.imageTextLow}>NetZero2040</h1>
              <h3 className={styles.imageTextMid}>Mint Your Climate Pledge</h3>
              <div className={styles.homeImageBtn}>
                <PopupButton id="ySCbuQuX" className={styles.surveyBtn}>
                  <div className={styles.pledgeButton}>
                  PLEDGE
                  </div>
                </PopupButton>
              </div>
            </div>
          </div>
          <div className={styles.signaturesContainer}>
            <h3 className={styles.signHeadTxt}>Signatories</h3>
            <div className={styles.signaturesLogGrid}>
              <div className={styles.signItem}>
                <img className={styles.signImg}
                  height='40px'
                  src='/pledges/amazon_logo.png' 
                  alt='Amazon' 
                />
              </div>
              <div className={styles.signItem}>
                <img className={styles.signImg}
                  height='40px'
                  src='/pledges/google_logo.png' 
                  alt='Google' 
                />
              </div>
              <div className={styles.signItem}>
                <img className={styles.signImg}
                  height='45px'
                  src='/pledges/microsoft_logo.png' 
                  alt='Microsoft' 
                />
              </div>
              <div className={styles.signItem}>
                <img className={styles.signImg}
                  height='50px'
                  src='/pledges/chainlink_logo.png' 
                  alt='Chainlink' 
                />
              </div>
              <div className={styles.signItem}>
                <img className={styles.signImg}
                  height='45px'
                  src='/pledges/celo_logo.png' 
                  alt='Celo' 
                />
              </div>
              <div className={styles.signItem}>
                <img className={styles.signImg}
                  height='45px'
                  src='/pledges/coinbase_logo.png' 
                  alt='Coinbase' 
                />
              </div>
            </div>
          </div>
          <div className={styles.faqContainer}>
            <div className={styles.faqInnerContainer}>
            <h2 className={styles.headerBand}>Climate Commitment</h2>
              <h3 className={styles.headerTxt}>Join the Movement to Protect Our Planet</h3>
              <h1 className={styles.headerStatementRight}>Reporting</h1>
              <h1 className={styles.headerStatementRight}>Decarbonization</h1>
              <h1 className={styles.headerStatementRight}>Carbon Neutral</h1>
            </div>
          </div>
        </main>
    </div>
  )
}
