import React from 'react';

// media

import Logo from './Media/Logo.svg'

const Welcome = () => {
    return (
        <section className="welcome">
            <div className="container">
                <div className="welcome__row">
                    <div className="welcome__left">
                        <img src={Logo} alt="" className="welcome__left-img"/>
                    </div>

                    <div className="welcome__right">
                        <h2 className="welcome__right-title">Добро пожаловать
                            в рекламную компанию М4!
                        </h2>
                        <p className="welcome__right-text">
                            Мы более 10 лет занимаемся производством
                            <br/>
                            наружной рекламы и полиграфии.
                            <br/>
                            <br/>
                            Найдем подходящее решение для Вашего заказа!
                            <br/>
                            <br/>
                            Оставьте заявку и мы свяжемся с Вами.</p>
                        <button className="welcome__right-btn">Оставить заявку</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;