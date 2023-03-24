import './App.css';
import React, { useState, useEffect } from "react";
import js_file from './menus.json';

const App = () => {
  const [menu, setMenu] = useState(js_file.menus[0]);
  const [listInfo, setListInfo] = useState({ list1: "アプリケーション詳細", list2: "解析プラン", list3: null});

  // useEffect(() => {
  //   dropdowns();
  // }, [listInfo])

  const buttonClick = (menu) => {
    setMenu(menu);
    setListInfo({ list1: menu.selects[0].title, list2: menu.selects[1].title, list3: null }, () => {
      console.log(listInfo);
    });
  };
  const list1Change = (event) => {
    setListInfo({ ...listInfo, list1: event });
  }
  const list2Change = (event) => {
    if (event.indexOf('オプションあり') !== -1) {
      // console.log('sss');
      setListInfo({ ...listInfo, list3: menu.selects[2].title }, () => {
        setListInfo({ ...listInfo, list2: event });
      });
    } else {
      console.log('sss');
      setListInfo({ ...listInfo, list3: null }, () => {
        setListInfo({ ...listInfo, list2: event });
      });
    } 
  };
   
  const list3Change = (event) => {
    setListInfo({ ...listInfo, list3: event });
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
  const containList3 = () => {
    if (listInfo.list3 === null) {
      return (<div></div>);
    }
    else {
      return (<div className='dropdown'>
        <select
          onChange={(event) => list3Change(event.target.value)}>
          <option>{listInfo.list3}</option>
          {menu.selects[2].options.map((option) => (
            <option>
              {option.title}
            </option>
          ))}</select>
      </div>);
    }
  }
  const dropdowns = () => {
    return (<div>
      <div className='dropdown'>
        <select onChange={(event) => list1Change(event.target.value)}>
          <option>{listInfo.list1}</option>
          {menu.selects[0].options.map((option) => (
            <option>
              {option.title}
            </option>
          ))}</select>
      </div>
      <div className='dropdown'>
        <select id='select'
          onChange={(event) => list2Change(event.target.value)}>
          <option>{listInfo.list2}</option>
          {menu.selects[1].options.map((option) => (
            <option>
              {option.title}
            </option>
          ))}</select>
      </div>
      {containList3()}
    </div>)
  }
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
      <ul>
        {/* {button2()} */}
      </ul>
    </div>
  );
}
export default App;
