//import React from 'react'
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import 'css/Header.css'

import imglogo from 'img/logo-header.png'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';


const Header = () => {

	let [searchText, setTxt] = useState()

	return (
        <header className="page-header">
			<Link to="/" className="logo"> <img src={imglogo} alt="website logo" /> </Link>

			<div className="nav-toggle">
				<input type="checkbox" id="check-menu" checked />
				<label for="check-menu" aria-label="Check Menu">
					<MenuIcon aria-label="menu">
						<SvgIcon>
							<path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
						</SvgIcon>
					</MenuIcon> 
				</label>
				<nav aria-label="Primary" className="navigation">
					<ul className="menu">
						<li><Link to="/">      Shop  </Link> </li>
						<li><Link to="/men">   Men   </Link> </li>
						<li><Link to="/women"> Women </Link> </li>
						<li><Link to="/kids">  Kids  </Link> </li>
					</ul>
				</nav>
			</div>
			

			<form className="search" id="search">
				<label for="find" aria-label="Search"></label>
				<input type="search" name="find" id="find" placeholder="Search..." onChange={() => setTxt(event.target.value)} onKeyPress={e => { if (e.key === 'Enter') e.preventDefault() }} />
				<button type="button" aria-label="findsubmit" >
				<Link to={`/search/${searchText}`}>
					<SearchIcon aria-label="search">
						<SvgIcon>
							<path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
						</SvgIcon>
					</SearchIcon>
				</Link>
				</button>
			</form>


			<ul className="your-products">
				<li><a href="#" aria-label="favorite"> 
					<FavoriteBorderIcon>
						<SvgIcon>
							<path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
						</SvgIcon>
					</FavoriteBorderIcon>
				</a></li>
				<li><a href="#" aria-label="cart"> 
					<ShoppingCartIcon>
						<SvgIcon>
							<path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
						</SvgIcon>
					</ShoppingCartIcon>
				</a></li>
			</ul>

		</header>
    )
}

export default Header