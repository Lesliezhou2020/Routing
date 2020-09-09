import React from 'react';


const Wrapper = props => {
    console.log(props.input);

    return(
        isNaN(props.input) ?
        <p>The word is: {props.input}</p> :
        <p>The number is: {props.input}</p>
    );
};
export default Wrapper;
