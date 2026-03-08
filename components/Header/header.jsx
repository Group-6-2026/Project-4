import React from 'react';
import './Header.css';

class Header extends React.Component 
{
    constructor(props) 
    {
        super(props);
    }

    render() 
    {
        return (
            <div className="container Header">
                <div className="header-title">
                    <span className="header-icon">🔌</span> This is a Header
                </div>
                <div className="header-stripe"></div>
            </div>
        );
    }
}

export default Header;
