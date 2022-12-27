import React from 'react';
import './FormCallBack.scss';
import fromCover from '../../Resources/fromCover.png'
function FormCallBack() {
    return (
        <div className='form'>
            <div className="form__container">
                <form className='from__content' action="#">
                    <div className="form__title">
                        <h2 className='form__title--style'>
                            Подпишитесь на нашу рассылку, чтобы получать последние обновления и предложения
                        </h2>
                    </div>
                    <div className="form__description">
                        <p className='form__description--style'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </p>
                    </div>
                    <div className="form__inputs">
                        <div className="form__input--email">
                            <input className='form__email--style' type="email" name="" id="" placeholder='Введите свой email' />
                        </div>
                        <div className="form__input--submit">
                            <input className='form__submit--style' type="submit" value="Подписаться" />
                        </div>
                    </div>
                </form>
                <div className="from__cover">
                    <img src={fromCover} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FormCallBack