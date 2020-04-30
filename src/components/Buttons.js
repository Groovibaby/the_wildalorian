import React  from "react";
import "../style.css";



 class Button extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             randomPlanet: 0
         }
         this.handleClick = this.handleClick.bind(this);
     }
     handleClick() {
        const min = 1;
        const max = 5;
        const rand = min + Math.random() * (max - min);
        this.setState({ randomPlanet: this.state.random  });
      }
     render() {

  return (
       
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
  )
  }
}
  export default Button;

