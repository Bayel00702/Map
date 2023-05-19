import React from 'react';

// Media
import Item1 from './Media/Item1.png'
import Item2 from './Media/Item2.png'
import Item3 from './Media/Item3.png'
import Item4 from './Media/Item4.png'
import Item5 from './Media/Item5.png'
import Item6 from './Media/Item6.png'
import WhyAcc from "./WhyAcc";


const Why = () => {
    return (
        <section className="why">
            <div className="container">
                <h2 className="why__title">
                    ПОЧЕМУ ВЫБИРАЮТ
                    <br/>
                    ИМЕННО Нас?
                </h2>

                <div className="why__row">
                    <WhyAcc
                        icon={Item1}
                        text={'Решение любой задачи'}
                    />

                    <WhyAcc
                        icon={Item2}
                        text={'Только проверенные материалы'}
                    />

                    <WhyAcc
                        icon={Item3}
                        text={'Скорость исполения'}
                    />

                    <WhyAcc
                        icon={Item4}
                        text={'Нестандартные решения'}
                    />

                    <WhyAcc
                        icon={Item5}
                        text={'Современное производство'}
                    />

                    <WhyAcc
                        icon={Item6}
                        text={'Гарантия качества'}
                    />
                </div>
            </div>
        </section>
    );
};

export default Why;