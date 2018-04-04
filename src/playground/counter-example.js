const appRoot = document.querySelector( '#app' );

let count = 0;
const addOne = () => {
    console.log( 'addOne' );
    count++;
    renderCounter();
};
const minusOne = () => {
    console.log( 'Minus' );
    count--;
    renderCounter();
};
const reset = () => {
    console.log( 'reset' );
    count = 0;
    renderCounter();
};

const renderCounter = () => {
    const template = (
        <div>
            <h1>Count: { count }</h1>
            <button id="btn-add" className="button" onClick = { addOne }>+1</button>
            <button id="btn-minus" className="button" onClick = { minusOne }>-1</button>
            <button id="btn-reset" className="button" onClick = { reset }>reset</button>
        </div>
    );
    ReactDOM.render( template, appRoot );
};

renderCounter();
