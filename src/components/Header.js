import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import "./header.css";

const Tesla_Logo = require('../assets/logo.png');


function Header() {

    const [burgerStat, setburgerStat] = useState(false);
    const cars = useSelector(selectCars);
    function toggle() {
        document.getElementById('homeid').classList.toggle('active');
    }
    function remove() {
        document.getElementById('homeid').classList.remove('active');
    }
    let headerKey = document.querySelector('header2');
    const scr = (index) => {
        if (index === 0) headerKey.scrollIntoView()//headerKey.classList.toggle(window.scrollTo({top:0,behavior:"smooth"}));
        if (index === 1) headerKey.classList.toggle(window.scrollTo({ top: 10, behavior: "smooth" }));
        if (index === 2) headerKey.classList.toggle(window.scrollTo({ top: 20, behavior: "smooth" }));
        if (index === 3) headerKey.classList.toggle(window.scrollTo({ top: 30, behavior: "smooth" }));
    }

    return (
        <div className='hcontainer'>

            <img src={Tesla_Logo} />



            <div className='menu'>

                {cars && cars.map((car, index) => (
                    <li><a key={index} id='header2' href='/' onClick={() => scr(index)}>{car}</a></li>
                ))}

            </div>

            <div className='right_menu'>
                <a href='/'>Shop</a>
                <a href='/'>Account</a>
                <a href='/' id='open_menu' onClick={() => { setburgerStat(true); toggle() }}>
                    Menu
                </a>
            </div>

            <div className='burgur_nav' id='popup' style={{ transform: burgerStat ? 'translateX(0%)' : "translateX(100%)" }}>
                <div className='close_icon'  >
                    <div className='icon' onClick={() => { setburgerStat(false); remove() }}>
                        <CloseIcon />
                    </div>
                </div>

                {cars && cars.map((car, index) => (
                    <li key={index}><a href='/'>{car}</a></li>
                ))}

                <li><a href='/'>Existing Inventory</a></li>
                <li><a href='/'>Used Inventory</a></li>
                <li><a href='/'>Trade-in</a></li>
                <li><a href='/'>Cybertruck</a></li>
                <li><a href='/'>Roadrester</a></li>
                <li><a href='/'>Test Drive</a></li>
                <li><a href='/'>Insurance</a></li>
                <li><a href='/'>Powerwall</a></li>
                <li><a href='/'>Support</a></li>

            </div>
        </div>
    )
}

export default Header