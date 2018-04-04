console.log( 'App.js is running!' );

const appRoot = document.querySelector( '#app' );

const appData = {
    title: 'Indecision',
    subtitle: `Don't choose`,
    options: [ 'Item one', 'Item two' ]
};
const onFormSubmit = e => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if ( option ) {
        appData.options.push( option );
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    appData.options.length = 0;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{ appData.title }</h1>
            { appData.subtitle && <p>{ appData.subtitle }</p> }
            <p>{ ( appData.options && appData.options.length > 0 ) ? 'Here are your options' : 'No options' }</p>
            { appData.options && appData.options.length > 0 && <button onClick={onRemoveAll}>Remove All</button> }
            <ol>
                {
                    appData.options.map( ( value, i ) => <li key={ i }>{ value }</li> )
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render( template, appRoot );
};

render();









