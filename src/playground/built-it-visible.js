class VisibilityToggle extends React.Component {
    constructor( props ) {
        super( props );

        this.handleClick = this.handleClick.bind( this );

        this.state = {
          visibility: false
        };
    }

    handleClick() {
        this.setState( ( previousState ) => {
            return {
                visibility: !previousState.visibility
            }
        } );
    }

    render( ) {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={ this.handleClick }>
                    { this.state.visibility ? 'Hide' : 'Show' } details
                </button>
                {
                    this.state.visibility && (
                        <div>
                            <p>Bla bli blou</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render( <VisibilityToggle />, document.querySelector( '#app' ) );

/*
console.log( 'App.js is running!' );


const appRoot = document.querySelector( '#app' );

let visibility = false;

const onToggleClick = () => {
    console.log('onToggleClick');
    visibility = !visibility;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleClick}>
                { visibility ? 'Hide' : 'Show' } details
            </button>
            {
                visibility && (
                    <div>
                        <p>Bla bli blou</p>
                    </div>
                )
            }
        </div>
    );

    ReactDOM.render( template, appRoot );
};


render();

 */
