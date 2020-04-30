import React from 'react';
import axios from 'axios'
import Yoda from './Yoda';
import GetJoke from './GetJoke';
import OeufHaut from '../img/oeuf-haut.png';
import OeufBas from '../img/oeuf-bas.png';
import '../style.css';

// import './YodaFinal.css'

class YodaFinal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        joke: {},
      };
    }
    getJoke = () => {
      const { show } = this.state;
      axios.get(`https://bridge.buddyweb.fr/api/blagues/blagues`)
        .then(res => res.data)
        .then(data => {
          const index = Math.floor((Math.random() * (data.length)));
          this.setState({
            joke: data[index],
          });
          this.hideTimeout = setTimeout(() => this.setState({joke: ''}), 8000)
        });
    }
    componentWillUnmount() {
      clearTimeout(this.hideTimeout)
    }
  
  
    render() {
      return (
        <div className="test"> 
        <GetJoke joke={this.state.joke} />
       
        <div className="YodaPostion">
            
         
            
            <div className="yoda-container">
              <div className="yoda">
                  <img src={OeufHaut} className="OeufHaut" />
                  <Yoda />
                  <img src={OeufBas} className="OeufBas" />
              </div>
              <div className="buttons-container">
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <a href="#" onClick={() => this.getJoke()}>Blague</a> 
                </div>
                {/* <div className="button" id="button-7">
                  <div id="dub-arrow">
                    <img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" />
                  </div>
                  <a href="#">Let's Go!</a>
                </div> */}
              </div>
            </div>
            </div>
      </div>
      )
    }
  }
  export default YodaFinal;