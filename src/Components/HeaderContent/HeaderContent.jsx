import React, { useState } from 'react';
import './HeaderContent.scss';
import logo from '../../Resources/logo.svg';
import person from '../../Resources/person.svg';
import map from '../../Resources/map.svg';
function HeaderContent() {
	const [burger, setBurger] = useState(false);
	return (
		<header className='header'>
			<div className="header__container">
				<div className="header__nav">
					<div className="header__nav--logo">
						<img src={logo} alt="logo" />
					</div>
					<nav className="header__nav--list">
						<ul className='header__list--container'>
							<li className="header__list--item">
								<a className='header__item--link' href="">Главная</a>
							</li>
							<li className="header__list--item">
								<a className='header__item--link' href="">Бронирование</a>
							</li>
							<li className="header__list--item">
								<a className='header__item--link' href="">О нас</a>
							</li>
							<li className="header__list--item">
								<a className='header__item--link' href="">Контакты</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="header__person">
					<div className="header__person--item">
						<a href="">
							<img src={person} alt="icon" />
						</a>
					</div>
					<div className="header__person--item">
						<a href="">
							<img src={map} alt="icon" />
						</a>
					</div>
				</div>
				<div className={burger ? "header__burger close" : "header__burger"} onClick={() => burger ? setBurger(false) : setBurger(true)}>
					<span></span>
				</div>
			</div>

		</header>
	)
}

export default HeaderContent