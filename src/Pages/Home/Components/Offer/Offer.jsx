import React from 'react';

// Media
import Item1 from './Media/Item1.png'
import Item2 from './Media/Item2.png'
import Item3 from './Media/Item3.png'
import Item4 from './Media/Item4.png'
import Item5 from './Media/Item5.png'
import Item6 from './Media/Item6.png'
import Item7 from './Media/Item7.png'
import Item8 from './Media/Item8.png'
import Item9 from './Media/Item9.png'
import Item10 from './Media/Item10.png'
import Item11 from './Media/Item11.png'
import Item12 from './Media/Item12.png'

const Offer = () => {
    return (
        <section className="offer">
            <div className="container">
                <h2 className="offer__title">
                    Мы предлагаем
                </h2>

                <div className="offer__row">
                    <div className="offer__card">
                        <img src={Item1} alt="" className="offer__card-img"/>
                    </div>
                    <div className="offer__card">
                        <img src={Item2} alt="" className="offer__card-img"/>
                    </div>
                    <div className="offer__card">
                        <img src={Item3} alt="" className="offer__card-img"/>
                    </div>
                    <div className="offer__card">
                        <img src={Item4} alt="" className="offer__card-img"/>
                    </div>
                    <div className="offer__card">
                        <img src={Item5} alt="" className="offer__card-img"/>
                    </div>
                    <div className="offer__card">
                        <img src={Item6} alt="" className="offer__card-img"/>
                    </div>
                    <div className="offer__card">
                        <img src={Item7} alt="" className="offer__card-img"/>
                    </div>
                    <div className="offer__card">
                        <img src={Item8} alt="" className="offer__card-img"/>
                    </div>
                    <div className="offer__card">
                        <img src={Item9} alt="" className="offer__card-img"/>
                    </div>
                    <div className="offer__card">
                        <img src={Item10} alt="" className="offer__card-img"/>
                    </div>
                    <div className="offer__card">
                        <img src={Item11} alt="" className="offer__card-img"/>
                    </div>
                    <div className="offer__card">
                        <img src={Item12} alt="" className="offer__card-img"/>
                    </div>
                </div>

                <button className="offer__btn">
                    ещё услуги
                </button>
            </div>
        </section>
    );
};

export default Offer;