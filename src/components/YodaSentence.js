import React from 'react';


class YodaSentence extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className='YodaSentence'>
                    <textarea>{this.props.text}</textarea>
                    <div>{this.props.translated}</div>
                
            </div>
        )
    } 
        
    
}   

export default YodaSentence;
