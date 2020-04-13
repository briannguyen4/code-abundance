import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



class AltNavbar extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <header className="top-bar altbar">
                <div className="header-wrapper">
                    <div className="main-nav">
                        <span className="logo" href="#">
                            <img src={window.logoURL} />
                        </span>
                    </div>
                    <div className="searchbar-container">
                        <div className="search-icon">
                                <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <input className="searchbar" type="text" placeholder="Search..."></input>
                    </div>
                    <div className="rightbutton">
                        <div className="login">
                            <Link to="login" >Log in</Link>
                        </div>
                        <div className="signup">
                            <Link to="signup" >Sign up</Link>
                        </div>   
                        </div>
                </div>
            </header>
            )
        
        }
}

export default AltNavbar;
