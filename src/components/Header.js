import React from "react";

const Header = props => (
    <div>
        { props.title && <h1>{ props.title }</h1> }
        { props.subTitle && <h2>{ props.subTitle }</h2> }
    </div>
);

Header.defaultProps = {
    title : "Indecision App",
    subTitle : "Don't choose by yourself, let the app makes it for you!"
};

export default Header;
