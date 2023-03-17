import './App.css';
import React, { useState } from "react";
import js_file from './menus.json';

const App = () => {
  const [menu, setMenu] = useState(js_file.menus[0]);
  const [optionId, setOption_id] = useState('menu_1-select_2-option_1');

  const handleClick = (menu) => {
    setMenu(menu);
  }

  const handleSelectChange = (optionId) => {
    setOption_id(optionId);
  }

  const button = js_file.menus.map((menu) => (
    <li key={menu.id}>
      <a href={() => false} id={menu.id} className="btn" onClick={() => handleClick(menu)}>
        {menu.title}
      </a>
    </li>
  ));

  return (
    <div>
      <div id="button">
        <ul>
          {button}
        </ul>
      </div>
      <div className="dropdown">
        {menu.selects.map((select) => {
          if (optionId !== "menu_2-select_2-option_2" && optionId !== "menu_1-select_2-option_2" && (select.title === "オプション解析" || select.title === "オプション解析2")) {
          return(<div></div>);
          }
          else {
            return (
              <select onChange={(event) => handleSelectChange(event.target.value)}>
                <option value="">
                  {select.title}
                </option>
                {select.options.map((option) => (
                  <option value={option.id}>
                    {option.title}
                  </option>
                ))}
              </select>)
          }
        })}
      </div>
    </div>
  );
}

export default App;
