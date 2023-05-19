import React from 'react';

const Position = () => {
    return (
        <section className="position">
            <div className="container">
                <div className="position__row">
                    <div className="position__left">
                        <h2 className="position__left-title">
                            Не нашли нужной позиции?
                        </h2>
                        <p className="position__left-text">
                            Мы изготавливаем на заказ. Оставьте заявку и наш менеджер свяжется с Вами!
                        </p>
                    </div>
                    <div className="position__right">
                        <button className="position__right-btn">Оставить заявку </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Position;