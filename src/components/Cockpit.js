import React from 'react';
import '../style.css';
import YodaFInal from './YodaFInal'
import Buttons from "./Buttons"

class Cockpit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video1: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/GyFN2mb2zx8?&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
            video2: '<iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/giTdkmurDts?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            video3: '<iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/R5bkXdiVDg4?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            video4: '<iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/DRCD-zx5QFA?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    }



    render() {
        return (
            <>
        <section>
            <div className="Video videoWrapper">
            {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GyFN2mb2zx8?&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
            {/* <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/giTdkmurDts?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/R5bkXdiVDg4?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/DRCD-zx5QFA?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {this.state.video1}
            </div>
            <div className="Cockpit">
                <YodaFInal />
                <div className="ButtonDeskBoard">
                    <div className="ButtonDeskBoard_1_2">
                        <button className="ButtonDeskBoard_1" onClick="">Button 1</button>
                        <button className="ButtonDeskBoard_2" onClick="">Button 2</button>
                    </div>
                    <div className="ButtonDeskBoard_3_4">
                        <button className="ButtonDeskBoard_3" onClick="">Button 3</button>
                        <button className="ButtonDeskBoard_4" onClick={this.handleClick}>Button 4</button>
                    </div>
                    </div>
                {/* <Buttons /> */}
            </div>
        </section>
        </>
        )
    }
}

export default Cockpit;