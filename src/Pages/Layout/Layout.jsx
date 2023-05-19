import React, {useState} from 'react';
import Logo from "./Logo.svg";
import {NavLink, Link, Outlet} from "react-router-dom";
import Item1 from "../Home/Components/Footer/Media/Item1.png";

const Layout = () => {
    const [open, setOpen] = useState('true');
    return (
        <>
            <header className={`header ${open ? 'active' : ''}`}>
                <div className="header__top" onClick={ () => {
                    if (open){
                        setOpen((prev) => !prev)
                    }
                }}>
                    <div className="container">
                        <div className="header__row">
                            <div className="header__top-left">
                                <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.96873 0C2.18232 0.00306448 1.42899 0.316824 0.872906 0.872906C0.316824 1.42899 0.00306448 2.18232 0 2.96873V13.0313C0.00306448 13.8177 0.316824 14.571 0.872906 15.1271C1.42899 15.6832 2.18232 15.9969 2.96873 16H13.0313C13.8177 15.9969 14.571 15.6832 15.1271 15.1271C15.6832 14.571 15.9969 13.8177 16 13.0313V2.96873C15.9969 2.18232 15.6832 1.42899 15.1271 0.872906C14.571 0.316824 13.8177 0.00306448 13.0313 0H2.96873ZM2.96873 1.45455H13.0313C13.8749 1.45455 14.5455 2.12509 14.5455 2.96873V13.0313C14.5455 13.8749 13.8749 14.5455 13.0313 14.5455H2.96873C2.76953 14.5467 2.57207 14.5084 2.38779 14.4328C2.20352 14.3571 2.0361 14.2456 1.89524 14.1048C1.75438 13.9639 1.6429 13.7965 1.56725 13.6122C1.4916 13.4279 1.45329 13.2305 1.45455 13.0313V2.96873C1.45455 2.12509 2.12509 1.45455 2.96873 1.45455Z" fill="white"/>
<path d="M10.9873 4.44594L3.89964 7.41318C3.61443 7.55136 3.51796 7.82808 3.83071 7.97826L5.64899 8.60559L10.0454 5.65583C10.2854 5.47065 10.5312 5.52003 10.3197 5.72374L6.5438 9.43537L6.42519 11.0061C6.53505 11.2486 6.73621 11.2498 6.86452 11.1292L7.90917 10.0561L9.69831 11.5106C10.1139 11.7777 10.34 11.6053 10.4294 11.1158L11.6029 5.08313C11.7247 4.48057 11.517 4.21508 10.9873 4.44594V4.44594Z" fill="white"/>
</svg>
</span>
                                <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33886 10.9472C5.74943 10.9472 4.27248 9.05053 4.21094 5.89453H5.50802C5.55063 8.21095 6.50685 9.19214 7.26427 9.39445V5.89453H8.48566V7.89232C9.23361 7.80634 10.0193 6.89595 10.2844 5.89453H11.5058C11.3022 7.12861 10.4501 8.03899 9.84421 8.41326C10.4501 8.71672 11.4206 9.51078 11.7899 10.9472H10.4454C10.1566 9.9862 9.43717 9.24272 8.48566 9.14157V10.9472H8.33886Z" fill="white"/>
<path d="M2.96873 0C2.18232 0.00306448 1.42899 0.316824 0.872906 0.872906C0.316824 1.42899 0.00306448 2.18232 0 2.96873V13.0313C0.00306448 13.8177 0.316824 14.571 0.872906 15.1271C1.42899 15.6832 2.18232 15.9969 2.96873 16H13.0313C13.8177 15.9969 14.571 15.6832 15.1271 15.1271C15.6832 14.571 15.9969 13.8177 16 13.0313V2.96873C15.9969 2.18232 15.6832 1.42899 15.1271 0.872906C14.571 0.316824 13.8177 0.00306448 13.0313 0H2.96873ZM2.96873 1.45455H13.0313C13.8749 1.45455 14.5455 2.12509 14.5455 2.96873V13.0313C14.5455 13.8749 13.8749 14.5455 13.0313 14.5455H2.96873C2.76953 14.5467 2.57207 14.5084 2.38779 14.4328C2.20352 14.3571 2.0361 14.2456 1.89524 14.1048C1.75438 13.9639 1.6429 13.7965 1.56725 13.6122C1.4916 13.4279 1.45329 13.2305 1.45455 13.0313V2.96873C1.45455 2.12509 2.12509 1.45455 2.96873 1.45455Z" fill="white"/>
</svg>
</span>
                                <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6625 2.32604C12.9256 1.58572 12.0482 0.998791 11.0812 0.599453C10.1142 0.200115 9.07702 -0.00364427 8.03013 4.93304e-05C3.64339 4.93304e-05 0.0683074 3.55804 0.0642893 7.92603C0.0642893 9.32503 0.431944 10.686 1.12607 11.891L0 16L4.223 14.898C5.39126 15.5309 6.70008 15.8627 8.03013 15.863H8.03415C12.4219 15.863 15.996 12.305 16 7.93303C16.001 6.89108 15.7949 5.85922 15.3935 4.89692C14.9922 3.93461 14.4035 3.06087 13.6615 2.32604H13.6625ZM8.03013 14.521C6.84379 14.5214 5.67926 14.2036 4.65896 13.601L4.41788 13.457L1.91261 14.111L2.58162 11.678L2.42491 11.427C1.76173 10.3774 1.411 9.16206 1.41336 7.92203C1.41336 4.29604 4.38373 1.33805 8.03415 1.33805C8.90381 1.33649 9.76517 1.50632 10.5686 1.83774C11.372 2.16915 12.1016 2.6556 12.7152 3.26904C13.331 3.88009 13.8192 4.60646 14.1516 5.40627C14.484 6.20607 14.6541 7.06348 14.6519 7.92903C14.6479 11.568 11.6775 14.521 8.03013 14.521V14.521ZM11.6615 9.58703C11.4636 9.48803 10.4862 9.00903 10.3024 8.94103C10.1195 8.87603 9.98593 8.84203 9.85535 9.04003C9.72174 9.23703 9.34003 9.68603 9.22551 9.81503C9.111 9.94803 8.99246 9.96303 8.79357 9.86503C8.59568 9.76503 7.95379 9.55703 7.19437 8.88003C6.60171 8.35503 6.20492 7.70503 6.08639 7.50803C5.97187 7.31003 6.07534 7.20403 6.17478 7.10503C6.26218 7.01703 6.37268 6.87303 6.47212 6.75903C6.57257 6.64503 6.60572 6.56103 6.67102 6.42903C6.73631 6.29503 6.70517 6.18103 6.65595 6.08204C6.60572 5.98304 6.20894 5.00604 6.04118 4.61204C5.88046 4.22304 5.71672 4.27704 5.59417 4.27204C5.47966 4.26504 5.34606 4.26504 5.21245 4.26504C5.11156 4.26754 5.01228 4.29077 4.92084 4.33327C4.82939 4.37578 4.74776 4.43664 4.68106 4.51204C4.49824 4.71004 3.98694 5.18904 3.98694 6.16604C3.98694 7.14303 4.70015 8.08203 4.8006 8.21503C4.89904 8.34803 6.2009 10.347 8.19889 11.207C8.67102 11.412 9.04269 11.533 9.333 11.625C9.81014 11.777 10.2411 11.754 10.5846 11.705C10.9663 11.647 11.7609 11.225 11.9287 10.762C12.0934 10.298 12.0934 9.90203 12.0432 9.81903C11.994 9.73503 11.8604 9.68603 11.6615 9.58703V9.58703Z" fill="white"/>
</svg>
</span>
                            </div>
                            <div className="header__top-right">
                                <select className="header__top-right__select">
                                    <option value="">Новороссийск</option>
                                    <option value="">Новороссийск</option>
                                    <option value="">Новороссийск</option>
                                </select>
                                <p className="header__top-right__num">8 (909) 44-55-000</p>
                            </div>
                        </div>
                        <span  onClick={() => {
                            setOpen((prev) => !prev)
                        }} className="header__top-right__cancel"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8353 14.3639L14.3638 14.8353C14.1035 15.0956 13.6814 15.0956 13.421 14.8353L7.9999 9.4141L2.5787 14.8352C2.3184 15.0956 1.89626 15.0956 1.63591 14.8352L1.1645 14.3638C0.904151 14.1035 0.904151 13.6814 1.1645 13.421L6.5857 7.9999L1.1645 2.5787C0.904151 2.3184 0.904151 1.89626 1.1645 1.63591L1.6359 1.16451C1.89625 0.904159 2.3184 0.904159 2.5787 1.16451L7.9999 6.5857L13.421 1.1645C13.6814 0.90415 14.1035 0.90415 14.3638 1.1645L14.8353 1.6359C15.0956 1.89625 15.0956 2.3184 14.8353 2.5787L9.4141 7.9999L14.8353 13.421C15.0956 13.6814 15.0956 14.1035 14.8353 14.3639Z" fill="white"/>
</svg>
</span>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="container">
                        <nav className="header__nav">
                            <img src={Logo} alt=""/>

                            <div className="header__bottom-links">
                                <Link to="/" className="header__bottom-links__page">Главная </Link>
                                <Link to="" className="header__bottom-links__page header__bottom-links__page2">Услуги</Link>
                                <Link to="" className="header__bottom-links__page header__bottom-links__page3">Портфолио</Link>
                                <Link to="" className="header__bottom-links__page header__bottom-links__page4">Контакты </Link>
                                <Link to="" className="header__bottom-links__page header__bottom-links__page5">Информация</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <Outlet/>

            <footer className="footer">
                <div className="container">
                    <div className="footer__row">
                        <img src={Logo} alt=""/>

                        <div className="footer__center">
                            <img src={Item1} alt=""/>

                            <div className="footer-links">
                                <NavLink to="/" className="footer-links-page">Главная </NavLink>
                                <Link to="" className="footer-links-page footer__links-page2">Услуги</Link>
                                <Link to="" className="footer-links-page footer__links-page3">Портфолио</Link>
                                <Link to="" className="footer-links-page footer__links-page4">Контакты </Link>
                                <Link to="" className="footer-links-page footer__links-page5">Информация</Link>
                            </div>
                        </div>

                        <div className="footer__right">
                            <select className="footer__select">
                                <option value="">Новороссийск</option>
                                <option value="">Новороссийск</option>
                                <option value="">Новороссийск</option>
                            </select>
                            <p className="footer__num">8 (909) 44-55-000</p>
                            <p className="footer__adr">ул. Энгельса 84, офис 44</p>
                            <div className="footer__right-info">
                               <p className="footer__right-info__email"></p>

                                <div className="footer__right-info__icons">
                                    <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.71091 0C2.72789 0.00383059 1.78623 0.39603 1.09113 1.09113C0.39603 1.78623 0.00383059 2.72789 0 3.71091V16.2891C0.00383059 17.2721 0.39603 18.2138 1.09113 18.9089C1.78623 19.604 2.72789 19.9962 3.71091 20H16.2891C17.2721 19.9962 18.2138 19.604 18.9089 18.9089C19.604 18.2138 19.9962 17.2721 20 16.2891V3.71091C19.9962 2.72789 19.604 1.78623 18.9089 1.09113C18.2138 0.39603 17.2721 0.00383059 16.2891 0H3.71091ZM3.71091 1.81818H16.2891C17.3436 1.81818 18.1818 2.65636 18.1818 3.71091V16.2891C18.1818 17.3436 17.3436 18.1818 16.2891 18.1818H3.71091C3.46191 18.1834 3.21509 18.1355 2.98474 18.0409C2.7544 17.9464 2.54512 17.807 2.36905 17.631C2.19298 17.4549 2.05362 17.2456 1.95906 17.0153C1.8645 16.7849 1.81661 16.5381 1.81818 16.2891V3.71091C1.81818 2.65636 2.65636 1.81818 3.71091 1.81818Z" fill="#EBA707"/>
<path d="M13.7351 5.55645L4.87553 9.2655C4.51901 9.43823 4.39842 9.78412 4.78936 9.97185L7.06221 10.756L12.5577 7.06881C12.8577 6.83734 13.1649 6.89906 12.9006 7.1537L8.18073 11.7932L8.03246 13.7567C8.16979 14.0598 8.42123 14.0612 8.58162 13.9106L9.88744 12.5691L12.1239 14.3873C12.6433 14.7211 12.9259 14.5057 13.0377 13.8938L14.5046 6.35293C14.6569 5.59974 14.3972 5.26787 13.7351 5.55645Z" fill="#EBA707"/>
</svg>
</span>
                                    <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4236 13.683C7.18678 13.683 5.3406 11.3122 5.26367 7.36719H6.88503C6.93828 10.2627 8.13356 11.4892 9.08034 11.7421V7.36719H10.6071V9.86442C11.542 9.75695 12.5242 8.61897 12.8555 7.36719H14.3823C14.1278 8.90978 13.0627 10.0478 12.3053 10.5156C13.0627 10.8949 14.2758 11.8875 14.7374 13.683H13.0568C12.6958 12.4818 11.7965 11.5524 10.6071 11.426V13.683H10.4236Z" fill="#EBA707"/>
<path d="M3.71091 0C2.72789 0.00383059 1.78623 0.39603 1.09113 1.09113C0.39603 1.78623 0.00383059 2.72789 0 3.71091V16.2891C0.00383059 17.2721 0.39603 18.2138 1.09113 18.9089C1.78623 19.604 2.72789 19.9962 3.71091 20H16.2891C17.2721 19.9962 18.2138 19.604 18.9089 18.9089C19.604 18.2138 19.9962 17.2721 20 16.2891V3.71091C19.9962 2.72789 19.604 1.78623 18.9089 1.09113C18.2138 0.39603 17.2721 0.00383059 16.2891 0H3.71091ZM3.71091 1.81818H16.2891C17.3436 1.81818 18.1818 2.65636 18.1818 3.71091V16.2891C18.1818 17.3436 17.3436 18.1818 16.2891 18.1818H3.71091C3.46191 18.1834 3.21509 18.1355 2.98474 18.0409C2.7544 17.9464 2.54512 17.807 2.36905 17.631C2.19298 17.4549 2.05362 17.2456 1.95906 17.0153C1.8645 16.7849 1.81661 16.5381 1.81818 16.2891V3.71091C1.81818 2.65636 2.65636 1.81818 3.71091 1.81818Z" fill="#EBA707"/>
</svg>
</span>
                                    <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0781 2.90756C16.157 1.98215 15.0602 1.24849 13.8515 0.749316C12.6427 0.250143 11.3463 -0.00455533 10.0377 6.1663e-05C4.55424 6.1663e-05 0.0853842 4.44755 0.0803616 9.90754C0.0803616 11.6563 0.53993 13.3575 1.40758 14.8638L0 20L5.27875 18.6225C6.73908 19.4137 8.3751 19.8283 10.0377 19.8288H10.0427C15.5274 19.8288 19.995 15.3813 20 9.91629C20.0012 8.61385 19.7436 7.32403 19.2419 6.12115C18.7402 4.91826 18.0044 3.82609 17.0768 2.90756H17.0781ZM10.0377 18.1513C8.55474 18.1518 7.09907 17.7545 5.8237 17.0013L5.52235 16.8213L2.39076 17.6388L3.22702 14.5975L3.03114 14.2838C2.20217 12.9717 1.76375 11.4526 1.7667 9.90254C1.7667 5.37005 5.47966 1.67256 10.0427 1.67256C11.1298 1.67062 12.2065 1.8829 13.2107 2.29717C14.215 2.71144 15.1269 3.3195 15.894 4.0863C16.6638 4.85011 17.274 5.75808 17.6895 6.75784C18.105 7.75759 18.3176 8.82935 18.3149 9.91129C18.3099 14.46 14.5969 18.1513 10.0377 18.1513ZM14.5768 11.9838C14.3295 11.86 13.1077 11.2613 12.8779 11.1763C12.6494 11.095 12.4824 11.0525 12.3192 11.3C12.1522 11.5463 11.675 12.1075 11.5319 12.2688C11.3887 12.435 11.2406 12.4538 10.992 12.3313C10.7446 12.2063 9.94224 11.9463 8.99297 11.1C8.25213 10.4438 7.75615 9.63129 7.60798 9.38504C7.46484 9.13754 7.59417 9.00504 7.71848 8.88129C7.82772 8.77129 7.96584 8.59129 8.09015 8.44879C8.21572 8.30629 8.25715 8.20129 8.33877 8.03629C8.42039 7.86879 8.38146 7.72629 8.31994 7.60254C8.25715 7.47879 7.76117 6.25755 7.55148 5.76505C7.35058 5.2788 7.1459 5.3463 6.99271 5.34005C6.84957 5.3313 6.68257 5.3313 6.51557 5.3313C6.38946 5.33442 6.26535 5.36346 6.15105 5.41659C6.03674 5.46972 5.9347 5.5458 5.85133 5.64005C5.6228 5.88755 4.98368 6.4863 4.98368 7.70754C4.98368 8.92879 5.87519 10.1025 6.00075 10.2688C6.12381 10.435 7.75113 12.9338 10.2486 14.0088C10.8388 14.265 11.3034 14.4163 11.6662 14.5313C12.2627 14.7213 12.8014 14.6925 13.2308 14.6313C13.7079 14.5588 14.7012 14.0313 14.9108 13.4525C15.1168 12.8725 15.1168 12.3775 15.054 12.2738C14.9925 12.1688 14.8255 12.1075 14.5768 11.9838Z" fill="#EBA707"/>
</svg>
</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;