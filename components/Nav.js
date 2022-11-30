import React, { useState } from "react";
import Link from 'next/link'
// import Image from 'next/Image'
import navStyles from '../styles/Nav.module.css'
import Hamburger from './Hamburger'
import NavDropDownMenu from './navDropDownMenu'

const Nav = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false) 
  const [dropDownOpen, setDropDownOpen] = useState(false)  

  const toggleDropdown = () => {
    setDropDownOpen(!dropDownOpen)
  }

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

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
            <div className={navStyles.buttonBackground} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                <div className={navStyles.navDropdown}>
                    <button className={navStyles.buttonTracker}>
                        Trackers
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <NavDropDownMenu isOpen={dropDownOpen} />
                </div>
            </div>
            <Link href="/">
                <button className={navStyles.buttonHead}>
                    Services
                </button>
            </Link>
            <div className={navStyles.subHeaderRight}>
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
        <div className="mobileNav">
            <ul className="navList">
                <Link href="/blockchains">
                    <li>
                        <a className="navListItem" onClick={toggleHamburger}>
                            Blockchains (L1) Tracker
                        </a>
                    </li>
                </Link>
                <Link href="/carbon-credits">
                    <li>
                        <a className="navListItem" onClick={toggleHamburger}>
                            Carbon Credits Tracker
                        </a>
                    </li>
                </Link>
                <Link href="/">
                    <li>
                        <a className="navListItem" onClick={toggleHamburger}>
                            Services
                        </a>
                    </li>
                </Link>
                <Link href="/about">
                    <li>
                        <a className="navListItem" onClick={toggleHamburger}>
                            About
                        </a>
                    </li>
                </Link>
                {/* <li>Contact us</li> */}
            </ul>
        </div>
        <div className={navStyles.mobileHamburgerMenu} onClick={toggleHamburger}>
           <Hamburger isOpen={hamburgerOpen} />
        </div>

        <style jsx>{`
            
            .mobileNav {
                display:none;
                position:absolute;
                top:60%;
                right:2%;
                background:#181818;
                z-index:99;
                padding: 0 0.5rem 1rem;
                border-radius:4px;
                animation:fadeIn 0.3s;
                -webkit-animation: fadeIn 0.3s;
                -moz-animation: fadeIn 0.3s;
                -o-animation: fadeIn 0.3s;
                -ms-animation: fadeIn 0.3s;
                // transition: all 0.3s linear;
                
            }
            .navListItem {
                padding:1rem 0 1rem 1rem;
                cursor:pointer
            }
            .navListItemDesk {
                padding:1rem 0 1rem 1rem;
                cursor:pointer;
                display:flex;  
                list-style:none;
                list-style-type: none;
                width:100%
            }
            .mobileNav ul{
                display:flex;
                flex-wrap: wrap;
                float: right;
                margin: 0px;
                padding: 0px;
                overflow: hidden;
            }
            .mobileNav ul li{
                display:flex;  
                list-style:none;
                list-style-type: none;
                width:100%
                // padding-right: 1rem;
                // float:right
            }
            .navList, .navListDesk {
                width:14rem;
                padding:1rem
            }
            .navListDesk {
                width:20rem
            }
            @media only screen and (max-width:46em) {

                .mobileNav {
                    display: ${hamburgerOpen ? 'inline' : 'none'};
                }
            }

            @keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
              
            @-moz-keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
              
            @-webkit-keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
              
            @-o-keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
              
            @-ms-keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }

            `}</style>
    </nav>
  )
}

export default Nav