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
                    <li>item one</li>
                    <li>item two</li>
                </ol>
            </div>
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



const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
    </div>
);

ReactDOM.render( jsx, document.querySelector( '#app' ) );
