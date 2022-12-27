import React from 'react'
import CardHotel from '../CardHotel/CardHotel'
import FilterCategory from '../FilterCategory/FilterCategory'
import FormCallBack from '../FormCallBack/FormCallBack'
import './MainContent.scss'
function MainContent() {
	return (
		<main className='main'>
			<div className="main__container">
				<div className="main__title">
					<div className="main__title--h">
						<h1 className='main__h--style'>
							Лучшие отели
						</h1>
					</div>
					<div className="main__title--decription">
						<p className='main__decription--style'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
					</div>
				</div>
				<div className="main__filter">
					<div className="main__filter--items">
						<div className="main__filter--item">
							<FilterCategory>1 звезда</FilterCategory>

						</div>
						<div className="main__filter--item">
							<FilterCategory>2 звезды</FilterCategory>

						</div>
						<div className="main__filter--item">
							<FilterCategory>3 звезды</FilterCategory>

						</div>
						<div className="main__filter--item">
							<FilterCategory>4 звезды</FilterCategory>

						</div>
						<div className="main__filter--item">
							<FilterCategory>5 звезд</FilterCategory>

						</div>
					</div>
					<div className="main__filter--more">
						<div className="main__filter--btn">
							<button className='filter__btn--style'>Смотреть все</button>
						</div>
						<div className="main__filter--border"></div>
					</div>
				</div>
				<div className="main__list">
					<CardHotel />
					<CardHotel />
					<CardHotel />
					<CardHotel />
					<CardHotel />
					<CardHotel />
				</div>
				<div className="">
					<FormCallBack />
				</div>
			</div>
		</main>
	)
}

export default MainContent