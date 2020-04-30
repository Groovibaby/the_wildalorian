import React from 'react';
import '../style.css';
import YodaFInal from './YodaFInal'
import Buttons from "./Buttons"

class Cockpit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
        <section>
            <div className="Video videoWrapper">
            {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GyFN2mb2zx8?&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
            {/* <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/giTdkmurDts?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/R5bkXdiVDg4?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/DRCD-zx5QFA?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="Cockpit">
                <YodaFInal />
                <Buttons />
            </div>
        </section>
        </>
        )
    }
}

export default Cockpit;