import React from 'react';
import '../style.css';

class Cockpit extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
        <section>
            <div className="Video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GyFN2mb2zx8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div className="Cockpit">

            </div>
        </section>
        </>
        )
    }
}

export default Cockpit;