import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import mAxios from '../../utils/API';
import '../../new_css/app_css/App.css';
import '../../pe-icon-7-stroke/css/pe-icon-7-stroke.css';
import '../../pe-icon-7-stroke/css/helper.css';

const NavLinks = ({loggedIn}) => {
    const [authUrl, setAuthUrl] = useState("");

    useEffect(() => fetchAuthLink, []);

    const fetchAuthLink = mAxios.get('/auth/link')
        .then(response => {
            setAuthUrl(response.data.authUrl)
        })
        .catch(error => {
            console.log(error);
        });

    const suplaLogo = <NavLink class="tool-bar_supla" activeClassName="tool-bar_link--active" to="/">
        <svg className="logo-svg" data-v-76882e96="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-1 0.2 56.5 59.8">
        <g data-v-76882e96="" id="Layer_1_1_"></g> <g data-v-76882e96="">
            <path className="fill-none" data-v-76882e96="" d="M27.8,57.7c-9.2,0-18.3,0-27.5,0c-0.2,0-0.3,0-0.3-0.3c0-18.3,0-36.7,0-55c0-0.2,0-0.3,0.3-0.3
                c18.3,0,36.7,0,55,0c0.2,0,0.3,0,0.3,0.3c0,18.3,0,36.7,0,55c0,0.2,0,0.3-0.3,0.3C46.1,57.7,36.9,57.7,27.8,57.7z M16.8,3
                c-0.3,0-0.6,0-0.9,0c-0.2,0-0.4,0-0.6,0.1c-3,0.4-5.6,1.7-7.6,4.1c-2.1,2.5-2.9,5.3-2.5,8.6c0.3,2.8,1.6,5.1,3.7,7
                c2.5,2.2,5.4,3.1,8.7,2.9c0.2,0,0.3,0.1,0.4,0.3c1.7,4.9,3.4,9.8,5,14.7c0.6,1.7,1.2,3.4,1.7,5.2c0.1,0.3,0,0.4-0.2,0.6
                c-2.1,1.4-3,4-2.3,6.3c1.2,3.9,6,5.3,9.2,2.9c1.7-1.3,2.5-3,2.3-5.2c-0.1-1.3-0.7-2.5-1.6-3.4c-0.2-0.2-0.2-0.3,0-0.4
                c0.5-0.5,1-1,1.4-1.5c1.4-1.5,2.8-3,4.2-4.5c1.3-1.4,2.6-2.7,3.8-4.1c0.1-0.1,0.2-0.2,0.4-0.1c2.2,1.2,4.5,1.2,6.7-0.1
                c2.4-1.3,3.6-4.1,3.1-6.7c-0.6-3.1-3.3-5.3-6.7-5.3c-1.5,0-2.9,0.5-4.1,1.5c-0.2,0.2-0.4,0.2-0.7,0c-0.8-0.5-1.5-1-2.3-1.5
                c-3.4-2.1-6.7-4.3-10.1-6.4c-0.2-0.1-0.2-0.2-0.1-0.4c0.3-1,0.5-1.9,0.5-2.9c0.1-1.8-0.3-3.5-1.1-5.1C25.2,5.2,21.5,3.2,16.8,3z"></path> 
                <path data-v-76882e96="" d="M16.8,3c4.8,0.2,8.4,2.2,10.6,6.5c0.8,1.6,1.1,3.3,1.1,5.1c0,1-0.2,2-0.5,2.9c-0.1,0.2,0,0.3,0.1,0.4
                c3.4,2.1,6.7,4.3,10.1,6.4c0.8,0.5,1.5,1,2.3,1.5c0.3,0.2,0.4,0.2,0.7,0c1.2-1,2.6-1.5,4.1-1.5c3.3,0,6.1,2.2,6.7,5.3
                c0.5,2.6-0.8,5.3-3.1,6.7c-2.2,1.2-4.5,1.2-6.7,0.1c-0.2-0.1-0.3-0.1-0.4,0.1c-1.3,1.4-2.6,2.7-3.8,4.1c-1.4,1.5-2.8,3-4.2,4.5
                c-0.5,0.5-0.9,1-1.4,1.5c-0.2,0.2-0.2,0.3,0,0.4c0.9,0.9,1.5,2.1,1.6,3.4c0.2,2.1-0.6,3.9-2.3,5.2c-3.2,2.4-8,1-9.2-2.9
                c-0.8-2.3,0.2-4.9,2.3-6.3c0.2-0.2,0.3-0.3,0.2-0.6c-0.5-1.7-1.2-3.4-1.7-5.2c-1.7-4.9-3.4-9.8-5-14.7c-0.1-0.2-0.1-0.3-0.4-0.3
                c-3.3,0.2-6.2-0.7-8.7-2.9c-2.1-1.8-3.4-4.2-3.7-7c-0.4-3.2,0.5-6.1,2.5-8.6c2-2.3,4.5-3.7,7.6-4.1c0.2,0,0.4,0,0.6-0.1
                C16.2,3,16.5,3,16.8,3z M21.3,24.9c0,0,0,0.1,0,0.2c0.4,1.8,0.8,3.5,1.3,5.3c1.2,4.9,2.4,9.9,3.5,14.8c0.1,0.3,0.2,0.3,0.4,0.3
                c1.4-0.3,2.8-0.2,4.1,0.5c0.2,0.1,0.3,0.1,0.5-0.1c3-3.6,5.9-7.1,8.8-10.8c0.1-0.2,0.1-0.3,0-0.5c-1.5-2.2-1.6-4.5-0.3-6.8
                c0.1-0.2,0.1-0.3-0.1-0.4c-2.4-1.3-4.8-2.6-7.2-3.9c-1.8-1-3.6-1.9-5.4-2.9c-0.2-0.1-0.3-0.1-0.4,0.1c-0.3,0.5-0.7,1-1.1,1.4
                c-1.1,1.2-2.4,2.1-3.9,2.7C21.4,24.7,21.3,24.7,21.3,24.9z M24.6,14.2c0-0.7-0.1-1.5-0.4-2.3C23,8.8,20.7,7,17.4,6.7
                c-2.6-0.2-4.9,0.7-6.7,2.7c-2.2,2.5-2.5,6.2-0.6,9c1.8,2.7,5,4,8.3,3.3C22,21,24.6,17.9,24.6,14.2z M28.1,54.8c0.2,0,0.4,0,0.6-0.1
                c2.5-0.4,4-3,3.1-5.3c-0.7-1.6-2.5-2.7-4.4-2.4c-2.2,0.3-3.7,2.5-3.3,4.6C24.4,53.5,26,54.8,28.1,54.8z M45.4,27
                c-0.3,0-0.6,0-0.8,0.1c-2.4,0.5-3.8,2.9-2.9,5.2c0.8,1.9,3,2.9,5,2.2c1.9-0.6,2.9-2.5,2.5-4.4C48.9,28.2,47.3,27,45.4,27z"></path> 
                <path className="fill-none" data-v-76882e96="" d="M21.3,24.9c0-0.2,0.1-0.2,0.2-0.2c1.5-0.6,2.8-1.5,3.9-2.7c0.4-0.4,0.8-0.9,1.1-1.4c0.1-0.2,0.2-0.2,0.4-0.1
                c1.8,1,3.6,1.9,5.4,2.9c2.4,1.3,4.8,2.6,7.2,3.9c0.2,0.1,0.3,0.2,0.1,0.4c-1.3,2.3-1.1,4.6,0.3,6.8c0.1,0.2,0.1,0.3,0,0.5
                c-2.9,3.6-5.9,7.2-8.8,10.8c-0.1,0.2-0.3,0.2-0.5,0.1c-1.3-0.7-2.7-0.8-4.1-0.5c-0.3,0.1-0.4,0-0.4-0.3c-1.2-4.9-2.3-9.9-3.5-14.8
                c-0.4-1.8-0.8-3.5-1.3-5.3C21.3,25,21.3,24.9,21.3,24.9z"></path> 
                <path className="fill-none" data-v-76882e96="" d="M24.6,14.2c0,3.7-2.6,6.8-6.2,7.6c-3.3,0.7-6.5-0.6-8.3-3.3c-1.9-2.8-1.6-6.5,0.6-9c1.8-2,4-2.9,6.7-2.7
                c3.3,0.3,5.6,2,6.8,5.2C24.5,12.7,24.6,13.5,24.6,14.2z"></path> 
                <path className="fill-none" data-v-76882e96="" d="M28.1,54.8c-2,0-3.7-1.3-4-3.2c-0.4-2.1,1.1-4.3,3.3-4.6c1.9-0.3,3.7,0.8,4.4,2.4c1,2.3-0.5,5-3.1,5.3
                C28.5,54.8,28.2,54.8,28.1,54.8z"></path> 
                <path className="fill-none" data-v-76882e96="" d="M45.4,27c1.9,0,3.5,1.3,3.9,3c0.4,1.9-0.7,3.8-2.5,4.4c-2,0.7-4.3-0.3-5-2.2c-0.9-2.2,0.5-4.7,2.9-5.2
                C44.8,27,45.1,27,45.4,27z"></path></g></svg>
                supla
    </NavLink>

    const loggedInNav = <div class="container">
        {suplaLogo}
        <ul class="navbar-nav">
            <li>
                <a className="tool-bar_link" href="https://supla.org"><i class="pe-7s-plug"></i>Moja SUPLA</a>
            </li>
            <li>
                <a className="tool-bar_link" href="https://supla.org"><i class="pe-7s-phone"></i>Smartfony</a>
            </li>
            <li>
                <NavLink exact className="tool-bar_link" activeClassName="tool-bar_link--active" to="/locations"><i class="pe-7s-home"></i>Lokalizacje</NavLink>
            </li>
            <li>
                <a className="tool-bar_link" href="https://supla.org"><i class="pe-7s-key"></i>Identyfikatory dostępu</a>
            </li>
            <li>
                <a className="tool-bar_link" href="https://supla.org"><i class="pe-7s-config"></i>Automatyka</a>
            </li>
            <li>
                <NavLink exact className="tool-bar_link" to="/" onClick={()=> {localStorage.removeItem('token')}}><i class="pe-7s-user"></i>Wyloguj</NavLink>
            </li>
        </ul>
    </div>

    const loggedOutNav = <div class="container">
        {suplaLogo}
        <ul class="navbar-nav">
            <li><a className="tool-bar_link" href="https://supla.org"><i class="pe-7s-plug"></i>Moja SUPLA</a></li>
            <li><a className="tool-bar_link" href="https://supla.org"><i class="pe-7s-phone"></i>Smartfony</a></li>
            <li><a className="tool-bar_link" href="https://supla.org"><i class="pe-7s-key"></i>Identyfikatory dostępu</a></li>
            <li><a className="tool-bar_link" href="https://supla.org"><i class="pe-7s-config"></i>Automatyka</a></li>
            <li><a className="tool-bar_link" href={authUrl}><i class="pe-7s-user"></i>Zaloguj</a></li>
        </ul>
    </div>;

    return loggedIn ? loggedInNav : loggedOutNav;
}

export default NavLinks;
