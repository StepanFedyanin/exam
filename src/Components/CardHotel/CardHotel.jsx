import React from 'react';
import './CardHotel.scss';
import cover from '../../Resources/Image.png';
import likeIcon from '../../Resources/LIkeIcon.png';
import start from '../../Resources/Star.png';
function CardHotel() {
    return (
        <div className='card'>
            <div className="card__cover">
                <div className="card__cover--img">
                    <img src={cover} alt="cover" />
                </div>
                <div className="card__cover--favorite">
                    <img src={likeIcon} alt="likeicon" />
                </div>
            </div>
            <div className="card__info">
                <div className="card__info--place">
                    <p className='card__place--style'>Город, район, улица, дом</p>
                </div>
                <div className="card__info--hotel">
                    <p className='card__hotel--style'>Danubius Hotel Regents Park</p>
                </div>
                <div className="card__info--favorite">
                    <div className="card__favorite--price">
                        <p className='card__price--style'>5000 ₽/сутки </p>
                    </div>
                    <div className="card__favorite--rating">
                        <img src={start} alt="star" />
                    </div>
                </div>
                <div className="card__info--more">
                    <button className='card__more--btn'>Подробнее</button>
                </div>
            </div>
        </div>
    )
}

export default CardHotel