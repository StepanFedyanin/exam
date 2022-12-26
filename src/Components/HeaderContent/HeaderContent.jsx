import React, { useState } from 'react'
import './HeaderContent.scss'
function HeaderContent() {
	const [burger, setBurger] = useState(false);
	return (
		<header className='header'>
			<div className={burger ? "header__burger close" : "header__burger"} onClick={() => burger ? setBurger(false) : setBurger(true)}>
				<span></span>
			</div>
		</header>
	)
}

export default HeaderContent