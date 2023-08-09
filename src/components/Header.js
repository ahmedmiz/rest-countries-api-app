import './components.css'
import { FaMoon } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Header({ getTheme, theme }) {
    const [toggle, setToggle] = useState(1);
    const route = useNavigate();
    return (
        <header className={`${theme}-header d-flex justify-content-between mw-100`} >
            <h3 className='p-4 cursor-pointer' onClick={() => route('')}>where in the world?</h3>
            <h3 className='p-4 cursor-pointer' onClick={() => {
                setToggle(!toggle);
                getTheme(toggle);
            }}> <FaMoon />dark mode</h3>
        </header>
    );
}


export default Header;