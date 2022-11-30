import Link from 'next/link'
// import hamStyles from '../styles/Hamburger.module.css'

const NavDropDownMenu = ({ isOpen }) => {
    console.log('NAV HOVER ', isOpen)

    return (
        <>
            <div className="navDropDownMenu">
                <ul className="navListDesk">
                    <l1 className="navListItemDesk">
                        <Link  href="/blockchains">Blockchain (L1)</Link>
                    </l1>
                    <l1 className="navListItemDesk">
                        <Link href="/carbon-credits">Carbon Credits</Link>
                    </l1>
                </ul>
            </div>

            <style jsx>{`

                .navDropDownMenu {
                    display: ${isOpen ? 'block' : 'none'};
                    position:absolute;
                    top:60%;
                    left:-7%;
                    text-decoration: none;
                    text-align: left;
                    z-index:99; 
                    // -moz-box-shadow: 0px 3px 8px rgb(100,100,100);
                    // -webkit-box-shadow: 0px 3px 8px rgb(100,100,100);
                    // box-shadow: 0px 3px 8px rgb(100,100,100);
                    // box-shadow: 0 2px 2px -2px aquamarine;
                }
                .navListDesk {
                    width:12rem;
                    padding:0 1rem 1rem
                }
                .navListItemDesk {
                    padding:1rem 0 1rem 1rem;
                    font-size:0.9rem;
                    cursor:pointer;
                    display:flex;  
                    list-style:none;
                    list-style-type: none;
                    width:100%
                }
                
            `}</style>
        </>
    )
}

export default NavDropDownMenu