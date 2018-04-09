import React from 'react';
import Option from './Option';

const Options = props => (
    <div>
        <button
            className="button button--link"
            onClick={ props.handleDeleteOptions }
        >Remove All</button>
        { props.options.length === 0 && <p>Please add an option to get started!</p> }
        <ol>
            { props.options.map( ( value, i ) => (
                <Option
                    key = { i }
                    value = { value }
                    handleDeleteSingleOption = { props.handleDeleteSingleOption }
                />
            ) ) }
        </ol>
    </div>
);

export default Options;
