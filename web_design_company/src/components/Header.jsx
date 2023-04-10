import React, { useState } from 'react';

import icon from "../assets/icon.png"
import arrow from "../assets/arrow.png"

function Header() {
    const [style , setStyle] = useState({visibility : "visible"})
    const [lang , setLang] = useState("EN")

    document.querySelector("body").addEventListener("click",(event)=>{
        if (event.target.classList.contains("language")) {
            console.log(lang)
            document.querySelector(".selected-lang").textContent = event.target.textContent
        }
    })
    function toggle() {
        if (style.visibility === "hidden") {
            setStyle({visibility : "visible"})
            console.log(style )
            document.getElementsByClassName("language-choose")[0].style.visibility = style.visibility
        }else{
            console.log(style )
            setStyle({visibility : "hidden"})
            document.getElementsByClassName("language-choose")[0].style.visibility = style.visibility
        }
        }   
    return ( 
    <header>
        <nav>
            <img src={icon} />
            <h1 class="logo">CAD</h1>
            <p>Creat a Dream</p>
            <ul className='categores'>
                <li><a href="">about us</a></li>
                <li><a href="">protfoli</a></li>
                <li><a href="">Order side</a></li>
                <li><a href="">Design</a></li>
                <li><a href="">Services</a><ul className='drob-down'>
                    <li className="drob-down-item"><a href="">Calculator for the site</a></li>
                    <li className="drob-down-item"><a href="">Integration</a></li>
                    <li className="drob-down-item"><a href="">Site testing</a></li>
                    <li className="drob-down-item"><a href="">Site layout</a></li>
                    <li className="drob-down-item"><a href="">Parsing goods</a></li>
                    <li className="drob-down-item"><a href="">Articles</a></li>
                    <li className="drob-down-item"><a href="">Website improvement</a></li>
                </ul></li>
                
                <li><a href="">Contacts</a></li>
            </ul>
            <img src={arrow} className='arrow' onClick={toggle}/>
            <p className="selected-lang">EN</p>
            <ul className='language-choose'>
                <li className="language">RU</li>
                <li className="language">UK</li>
                <li className="language">EN</li>
                <li className="language">PL</li>
            </ul>
        </nav>

    </header>
     );
}

export default Header;