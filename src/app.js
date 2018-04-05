
class IndecisionApp extends React.Component {
    render() {

        const title = "Indecision App";
        const subTitle = "Don't choose by yourself, let the app makes it for you!";
        const options = [ "Item one", "Item Two" ];

        return (
            <div>
                <Header title={ title } subTitle={ subTitle }/>
                <Action />
                <Options options={ options }/>
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log('Props', this.props);

        return (
          <div>
              <h1>{ this.props.title }</h1>
              <h2>{ this.props.subTitle }</h2>
          </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>'Here are your options' / No options'</p>
                <p>Length: { this.props.options.length }</p>
                <button>Remove All</button>
                <ol>
                    {
                        this.props.options.map( ( value, i ) => <Option key={ i } value={ value } /> )
                    }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{ this.props.value }</li>
        );
    }
}

class AddOptions extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render( <IndecisionApp />, document.querySelector( '#app' ) );
