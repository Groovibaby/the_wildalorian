import React from 'react';
// import "./GetJoke.css";

function GetJoke ({joke}) {

    return (
        <div className="GetJoke">
            <p style={{color: "white",
                        backgroundColor: "green",
                        marginRight: "35%",
                        marginLeft: "35%",
                        border: "solid",
                        border: "solid",
                        borderRadius: "16px",
                        wordSpacing: "1px",
                        fontSize: "19px",
        }}>{joke.blagues}</p>
        </div>
    );
};

export default GetJoke;