import React from 'react'
import imglogo from 'img/logo-header.png'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';

const Header = () => {
    return (
        <header className="page-header">
			<a href="index.html" className="logo"> <img src={imglogo} alt="website logo" /></a>

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
						<li><a href="#">Men</a></li>
						<li><a href="#">Women</a></li>
						<li><a href="#">Kids</a></li>
						<li><a href="#">Brands</a></li>
						<li><a href="#">Outlet</a></li>
					</ul>
				</nav>
			</div>
			

			<form className="search">
				<label for="find" aria-label="Search"></label>
				<input type="search" name="find" id="find" placeholder="Search..." />
				<button type="submit" aria-label="findsubmit">
					<SearchIcon aria-label="search">
						<SvgIcon>
							<path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
						</SvgIcon>
					</SearchIcon>
				</button>
			</form>


			<ul className="your-products">
				<li><a href="#"> 
					<FavoriteBorderIcon aria-label="favorite">
						<SvgIcon>
							<path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
						</SvgIcon>
					</FavoriteBorderIcon>
				</a></li>
				<li><a href="#"> 
					<ShoppingCartIcon aria-label="cart">
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