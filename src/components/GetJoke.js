import React from 'react';
// import "./GetJoke.css";

function GetJoke ({joke}) {

    return (
        <div className="GetJoke">
            <p className="wild-yoda">{joke.blagues}</p>
        </div>
    );
};

export default GetJoke;