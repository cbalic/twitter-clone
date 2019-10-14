import React, { useState } from "react";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    console.log('clicked');
    setToggle(!toggle);
  }


  return (
    <nav>
      <div className="logo">
        <li><a>Twitter Clone</a></li>
      </div>
      {!toggle ? <><ul className="nav__links">
        <li><a>Home</a></li>
        <li><a>Messages</a></li>
        <li><a>Example link</a></li>
      </ul>
        <div className="nav__profile">
          <input type="text" placeholder="search" />
          <img src="https://i.pravatar.cc/300" />
          <button>Tweet</button>
        </div></> : null}

      <div onClick={toggleMenu} className="burger-menu">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>

  )
}


export default Navbar;

