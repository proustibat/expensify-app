import React from 'react';

const PageEdit = props => {
    return (
        <div>
            Editing { props.match.params.id }
        </div>
    );
};

export default PageEdit;
