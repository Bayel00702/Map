import React, {useState} from 'react';

const WhyAcc = ({icon, text}) => {

    const  [active, setActive] = useState(false);

    return (
        <div className="why__card">
            <img src={icon} onClick={() => setActive(!active)} alt="" className="why__card-img"/>
            <p className="why__card-text" style={{display: active ? 'block' : 'none'}}>{text}</p>
        </div>
    );
};

export default WhyAcc;