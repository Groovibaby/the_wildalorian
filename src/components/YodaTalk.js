import React from 'react';
import './YodaTalk.css';
import axios from 'axios';


class YodaTalk extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                text: "",
                translated:"",
            }
            this.onChange = this.onChange.bind(this);
            this.submitSentence = this.submitSentence.bind(this);
        }
            onChange(e) {
                this.setState({
                    [e.target.name]: e.target.value,
                });
            }
                
            submitSentence = (e) => {
             e.preventDefault();   

                axios.post(`https://yodish.p.rapidapi.com/yoda.json?text=${this.state.text}`, {}, {headers :  {
                    "X-Rapidapi-Host": "yodish.p.rapidapi.com",
                    "X-Rapidapi-Key": "6b8413b124mshe9e6d8958f14e23p1ad49ejsn15df4a70f0af",
                    "Content-Type": "application/x-www-form-urlencoded"
                }})
                .then(response => response.data.contents.translated)
                .then(data => this.setState({ translated: data}))
            }

                
    
        
            render() {
                return (
                    <div className='Container'>
                    <form onSubmit={this.submitSentence} className="yoda-form">
                        <input
                            type= 'text'
                            placeholder='Here, you can write, young padawan'
                            id= 'text'
                            name="text"
                            onChange={this.onChange}
                            value= {this.state.text}
                            className="input-text"
                            />
                            <br/>
                            <input type='submit' value='Translate you can!'/>
                    </form>
                    <div style={{ color: "white"}} className='result'><bold>{this.state.translated}</bold></div>
                        
                    </div>
                )
            }
        }

        export default YodaTalk;

