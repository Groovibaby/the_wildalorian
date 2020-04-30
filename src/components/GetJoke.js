import React from 'react';
// import "./GetJoke.css";

function GetJoke ({joke}) {

    return (
        <div className="GetJoke">
            {joke.blagues}
        </div>
    );
};

export default GetJoke;