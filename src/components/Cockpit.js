import React from 'react';
import '../style.css';
import YodaFInal from './YodaFInal';
import YodaTalk from './YodaTalk';

class Cockpit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/DRCD-zx5QFA?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
    }

    handleClick1 = () => {
        this.setState({ video: <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/giTdkmurDts?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> });
    }

    handleClick2 = () => {
        this.setState({ video: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GyFN2mb2zx8?&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> });
    }

    handleClick3 = () => {
        this.setState({ video: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/At54ZmjfHxk?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> });
    }

    handleClick4 = () => {
        const videos = [
            <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/giTdkmurDts?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/At54ZmjfHxk?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/X2Z0B-w1KeM?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/KP0Qnk5VymE?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/9LgeDcu-oho?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/P3-lbPpxUEw?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/yDiD8F9ItX0?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/Xgk023R-J3U?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/LTvFsTbyILg?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/-hTVNidxg2s&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            <iframe width="1500px" min-width="100%" height="800px" src="https://www.youtube.com/embed/7C0QNNQa74w&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        ];
        let num = Math.floor(Math.random() * (11 - 1)) + 1;
        this.setState({ video: videos[num] });
    }
    
    render() {
    
        return (
            <>
        <section>
            <div className="Video videoWrapper">
            {this.state.video}   
            </div>
            <div className="Cockpit">
                <YodaFInal />
                <div className="ButtonDeskBoard">
                    <div className="ButtonDeskBoard_1_2">
                        <button className="ButtonDeskBoard_1" onClick={this.handleClick1}>To the Moon</button>
                        <button className="ButtonDeskBoard_2" onClick={this.handleClick2}>Light Speed</button>
                    </div>
                    <div className="ButtonDeskBoard_3_4">
                        <button className="ButtonDeskBoard_3" onClick={this.handleClick3}>Vesoul</button>
                        <button className="ButtonDeskBoard_4" onClick={this.handleClick4}>Random</button>
                    </div>
                </div>
                < YodaTalk />
            </div>
        </section>
        </>
        )
    }
}

export default Cockpit;