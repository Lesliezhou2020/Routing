import React from 'react';


const All = props => {
    console.log(props.input);

    return(
        isNaN(props.input) ?
        <p style={{color:props.textcolor, background:props.bgcolor}}>The word is: {props.input}</p> :
        <p style={{color:props.textcolor, background:props.bgcolor}}>The number is: {props.input}</p>
    );
};
export default All;
