import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';

function Header() {
    return (
        <div className="header">
            {/* Left handside of the header component */}

            <div className="header__left">
                <MenuIcon />
                <img 
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="" 
                />
            </div>

            {/* Middle of the header component */}

            <div className="header__input">
                <input className="no__outline" placeholder="Search" type="text"/>
                <SearchIcon className="header__inputButton"/>
                <MicIcon className="header__inputVoice" />
            </div>

            {/* Right handside of the header component */}

            <div className="header__right">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar className="header__icon" />
            </div>

        </div>
    )
}

export default Header
