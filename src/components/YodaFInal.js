import React from 'react';
import axios from 'axios'
import Yoda from './Yoda';
import GetJoke from './GetJoke';

// import './YodaFinal.css'

class YodaFinal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        joke: {},
      };
    }
    getJoke() {
      axios.get(`https://bridge.buddyweb.fr/api/blagues/blagues`)
        .then(res => res.data)
        .then(data => {
          const index = Math.floor((Math.random() * (data.length)));
          this.setState({
            joke: data[index],
          });
        });
    }
  
    render() {
      return (
        <div className="App">
            
            <GetJoke joke={this.state.joke} />
            
            <div className="yoda-container">
              <div className="yoda">
                  <Yoda />
              </div>
              <div className="buttons-container">
                <div class="button" id="button-3">
                  <div id="circle"></div>
                  <a href="#" onClick={() => this.getJoke()}>Blague</a> 
                </div>
                <div class="button" id="button-7">
                  <div id="dub-arrow">
                    <img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" />
                  </div>
                  <a href="#">Let's Go!</a>
                </div>
              </div>
            </div>
      </div>
      )
    }
  }
  export default YodaFinal;