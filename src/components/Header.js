import React from "react";
import {Link} from "react-router-dom";
import Logo from '../Image/images.png'

const Header = ()=>{
    return(
      <header>

          <a href="/"> <img src={Logo} alt=""/></a>
          <nav>
              <Link className={'nav_title'} to={'/'}>Домой</Link>
              <Link className={'nav_title'} to={'/search'}>Найти коктейль</Link>
          </nav>
      </header>
    )
}
export default Header
