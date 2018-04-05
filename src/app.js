
class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
          <div>
              <h1>Indecision App</h1>
              <h2>Don't choose by yourself, let the app make it for you!</h2>
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
                <button>Remove All</button>
                <ol>
                    <Option />
                    <Option />
                    <Option />
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>item option</li>
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
