import React from 'react';
import './style.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>Logo</div>
            <div className='navbar'>
                <div className='navbar__item'><Link className='navbar__link'>Menu1</Link></div>
                <div className='navbar__item'><Link className='navbar__link'>Menu2</Link></div>
                <div className='navbar__item'><Link className='navbar__link'>Menu3</Link></div>
            </div>
            <div className='header__buttons'>
                <div className='header__profile'>ЛК если юзер вошёл отображается</div>
                <div className='header__login'>Войти</div>
                <div className='header__logout'>Выйти</div>
            </div>
        </div>
    );
};

export default Header;