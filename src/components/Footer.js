import React from 'react'
import './Footer.css'
import logoPng from "../img/logo-wildalorian3.png";
class Footer extends React.Component {
    render() {
        return(

            <div className="Footer">
                <div className= "footer-logo">
                    <img src= {logoPng} alt="The Wildalorian" className='img-logo'/>
                </div>
                <div className='footer-link'>
                    <a href="#">The flight Crew</a>
                    <a href="#">Travel!</a>
                    <a href="#">Réalisé par Thomas, François, Michaël et Benoit</a>
                    <a href="#">Wild Code School</a>
                </div>
            </div>
        )
    }
}
export default Footer;