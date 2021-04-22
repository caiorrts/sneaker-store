import React from 'react'
import 'css/Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SvgIcon from '@material-ui/core/SvgIcon';



const Footer = () => {

    // console.log(useContext(searchText))

    return (
        <footer className="page-footer">
            <ul className="social">
                <li><a href="https://www.facebook.com/" aria-label="Facebook">
                    <FacebookIcon aria-label="Facebook">
						<SvgIcon>
							<path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
						</SvgIcon>
					</FacebookIcon> 
                </a></li>
                <li><a href="https://www.instagram.com" aria-label="Instagram"> 
                    <InstagramIcon aria-label="Instagram">
						<SvgIcon>
							<path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
						</SvgIcon>
					</InstagramIcon>
                </a></li>
                <li><a href="https://www.twitter.com" aria-label="Twitter"> 
                    <TwitterIcon aria-label="Twitter">
						<SvgIcon>
							<path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
						</SvgIcon>
					</TwitterIcon>
                </a></li>
            </ul>
            <nav aria-label="Legal">
                <ul className="legal">
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Accessibility Policy</a></li>
                </ul>
            </nav>
            <p className="copyright">&copy; Copyright, Sneaker Store 2021.</p>
            {/* <h1>{useContext(searchText)}</h1> */}
        </footer>
    )

}

export default Footer