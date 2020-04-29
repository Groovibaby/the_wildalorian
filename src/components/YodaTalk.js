import React from 'react';
import './YodaTalk.css';
import YodaSentence from './YodaSentence';

class YodaTalk extends React.Component {

    state = {
        yoda: []

    }

    componentDidMount() {
        axios.post('https://yodish.p.rapidapi.com/yoda.json?text=Master%20Obiwan%20has%20lost%20a%20planet.')
        .then(response => response.data)
        .then(data => {
            this.setState({yoda: data})
        })
    }

    render() {
        return (
            <div className='Container'>
                {this.state.yoda.map((item)=>
                <YodaSentence 
                text= {item.text}
                translated= {item.translated}
                />)}
                
            </div>
        )
    }
}

export default YodaTalk;