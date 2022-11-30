import hamStyles from '../styles/Hamburger.module.css'

const Hamburger = ({ isOpen }) => {

    return (
        <>
            <div className="hamburger">
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>

            <style jsx>{`
                .hamburger{
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                    cursor:pointer;
                }
                .burger{
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: white;
                    box-shadow: 0px 1px 1px white, 0 0 8px aqua;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }
                .burger1{
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2{
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .burger3{
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }
                
            `}</style>
        </>
    )
}

export default Hamburger