import React from 'react';
import './YodaTalk.css'


class YodaTalk extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                text: "",
                translated:"",
            }
            this.onChange = this.onChange.bind(this);
            this.submitForm = this.submitSentence.bind(this);
        }
            onChange(e) {
                this.setState({
                    [e.target.name]: e.target.value,
                });
            }
            // submitSentence = (e) => {
            //     e.preventDefault();
            //     const url = 'https://yodish.p.rapidapi.com/yoda.json?text=Master%20Obiwan%20has%20lost%20a%20planet.'
            //     axios.post(url, this.state.yoda)
            //     // .then(res => res.data)//
            //     .then(res => {console.log(res)});
 
                
            // }
            submitSentence = (e) => {
             e.preventDefault();   
            fetch("https://yodish.p.rapidapi.com", {
                    method: "POST",
                    headers: {
                        "x-rapidapi-host": "yodish.p.rapidapi.com/yoda.json",
                        "x-rapidapi-key": "6b8413b124mshe9e6d8958f14e23p1ad49ejsn15df4a70f0af",
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    body: {
                        "text": this.state.text
                    }
                })
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                });
            }
    
        
            render() {
                return (
                    <div className='Container'>
                    <form onSubmit={this.submitSentence} className="yoda-form">
                        <textarea
                                type= 'text'
                                id= 'text'
                                name="text"
                                onChange={this.onChange}
                                value= {this.state.text}>
                            </textarea>
                            <input type='submit' value='Translate you can!'/>
                    </form>
                        
                    </div>
                )
            }
        }

        export default YodaTalk;

