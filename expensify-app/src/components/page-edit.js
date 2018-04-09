import React from 'react';

const EditExpensePage = props => {
    return (
        <div>
            Editing { props.match.params.id }
        </div>
    );
};

export default EditExpensePage;
