import React from 'react';
import {FcLike} from 'react-icons/fc';
import footerclass from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={footerclass['footer__wrapper']}>
			<p>
				© 2025 - 🦍
				&nbsp;Gorilla Workout
			</p>
		</footer>
	);
};

export default Footer;
