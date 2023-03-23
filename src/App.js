import './App.css';
import React, { useState } from "react";
import js_file from './menus.json';

const App = () => {
  const [menu, setMenu] = useState(js_file.menus[0]);
  // const [optionId, setOption_id] = useState('menu_1-select_2-option_1');
  // const [listInfo, setListInfo] = useState({ menu: "menu_1", list1: "アプリケーション詳細", list2: "解析プラン", list3: null });

  const handleClick = () => {
  }
  // const handleSelectChange = (optionId) => {
  //   setOption_id(optionId);
  //   if (optionId.includes('select_1')) {
  //     console.log("include,select_1!!");
  //     setListInfo({ ...listInfo, list1: optionId });
  //   }
  //   if (optionId.includes('select_2')) {

  //     setListInfo({ ...listInfo, list2: optionId });
  //   }
  // }
  // if (optionId === listInfo.list2) {
  //   console.log("wow");
  // } const clickOk = () => {
  //   setListInfo({ ...listInfo, menu: menu });
  // }

  const buttonClick = (menu) => {
    let obj = document.getElementById('select');
    console.log(obj);
    obj.selectedIndex = -1;
    dropdowns(menu);
    setMenu(menu);
  }

  const button = js_file.menus.map((menu) => (
    <li key={menu.id}>
      <a
        href={() => false}
        id={menu.id}
        className="btn"
        onClick={() => buttonClick(menu)}
      >
        {menu.title}
      </a>
    </li>
  ));

  const dropdowns = () => {
    return (<div>
      <div className='dropdown'>
        <select onChange={() => list1Change()}>
          <option>{menu.selects[0].title}</option>
          {menu.selects[0].options.map((option) => (
            <option>
              {option.title}
            </option>
          ))}</select>
      </div>
      <div className='dropdown'>
        <select id='select'
          onChange={() => handleClick()}><option>{menu.selects[1].title}</option>
          {menu.selects[1].options.map((option) => (
            <option>
              {option.title}
            </option>
          ))}</select>
      </div>

      <div className='dropdown'>
        <select onChange={() => handleClick()}><option>{menu.selects[2].title}</option>
          {menu.selects[2].options.map((option) => (
            <option>
              {option.title}
            </option>
          ))}</select>
      </div></div>)
  }
  // const menus = js_file.menus;

  // const button2 = () => {
  //   return (
  //     <a href={() => false} className="btn" onClick={() => handleClick()}>
  //       OK
  //     </a>
  //   );
  // }

  // console.log(menu);
  return (
    <div>
      <div id="button">
        <ul>
          {button}
        </ul>
      </div>
      <div>
        {dropdowns()}
      </div>
      {/* <div className="dropdown">
        {menu.selects.map((select) => {
          if (optionId !== "menu_2-select_2-option_2" && optionId !== "menu_1-select_2-option_2" && (select.title === "オプション解析" || select.title === "オプション解析2")) {
            return (<div></div>);
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
      </div> */}
      <ul>
        {/* {button2()} */}
      </ul>
    </div>
  );
}
export default App;
