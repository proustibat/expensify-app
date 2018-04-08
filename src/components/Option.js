import React from "react";

const Option = props => (
    <li>
        <p>
            { props.value }
            <button onClick = { e => { props.handleDeleteSingleOption( props.value ) } } >Remove</button>
        </p>
    </li>
);

export default Option;
