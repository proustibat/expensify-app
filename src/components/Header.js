import React from "react";

const Header = props => (
    <div className="header">
        { props.title && <h1 className="header__title">{ props.title }</h1> }
        { props.subTitle && <h2 className="header__subtitle">{ props.subTitle }</h2> }
    </div>
);

Header.defaultProps = {
    title : "Indecision App",
    subTitle : "Don't choose by yourself, let the app makes it for you!"
};

export default Header;
