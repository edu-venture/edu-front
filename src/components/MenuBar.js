import React, { useState } from 'react';
import './MenuBarStyled.scss';

const MenuBar = () => {
  const [userName, setUserName] = useState('홍길동');

  return (
    <header>
      <div className='logo'>
        <p>EduVenture</p>
      </div>
      <ul className='navBar'>
        <li className='navItem'><a href='#'>출결</a></li>
        <li className='navItem'><a href='#'>수업</a></li>
        <li className='navItem'><a href='#'>차량</a></li>
        <li className='navItem'><a href='#'>수납</a></li>
        <li className='navItem'><a href='#'>메신저</a></li>
      </ul>
      <div className='userInfo'>
        {userName} 님
      </div>
    </header>
  )
}

export default MenuBar