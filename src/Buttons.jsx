import './App.css';
import js_file from './menus.json';
import React from "react";

const botton = js_file.menus.map((menu) => (
    <li>
        <a href={() => false} class="btn">{menu.title}</a>
    </li>
))

const Buttons = () => {
    // console.log(js_file.menus[0].title)
    return (
        <div id="button">
            <ul>
                {botton}
            </ul>
        </div>

    )
}
export default Buttons;