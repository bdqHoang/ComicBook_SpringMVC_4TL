import React from "react";

export default function Header() {
    return (
        <>
            <div className="wrap"><canvas id="sakura"></canvas>
            </div>
            <div id="preloader-active"><div className="preloader d-flex
                align-items-center justify-content-center"> <div
                    className="preloader-inner position-relative"> <div
                        className="preloader-circle"></div> <div
                            className="preloader-img pere-text"> <img
                            src="https://yae.hifive03.com/assets/img/logo/preloader.png"
                            alt="" /> </div> </div></div>
            </div>


            <header>
                <div className="header-area"> <div className="main-header "> <div
                    className="header-top d-none d-md-block"> <div
                        className="container"> <div className="col-xl-12"> <div
                            className="header-info-right d-flex
                                    justify-content-end"> <ul
                                className="header-social"> <li><a
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Facebook" href="#"><i
                                        className="fa-brands
                                                    fa-facebook-f"></i></a></li>
                                <li><a data-toggle="tooltip"
                                    data-placement="top"
                                    title="Twitter" href="#"><i
                                        className="fa-brands
                                                    fa-twitter"></i></a></li>
                                <li><a data-toggle="tooltip"
                                    data-placement="top"
                                    title="Discord" href="#"><i
                                        className="fa-brands
                                                    fa-discord"></i></a></li>
                                <li><a data-toggle="tooltip"
                                    data-placement="top"
                                    title="Reddit" href="#"><i
                                        className="fa-brands
                                                    fa-reddit-alien"></i></a></li>
                            </ul> </div> </div> </div> </div> <div
                                className="header-mid d-none d-md-block"> <div
                                    className="container"> <div className="row d-flex
                                align-items-center">
                                <div className="col-xl-3 col-lg-3 col-md-3"> <div
                                    className="logo"> <a href="index.html"><img
                                        src="https://yae.hifive03.com/assets/img/logo/logo.png"
                                        alt="" /></a> </div> </div> <div
                                            className="col-xl-9 col-lg-9 col-md-9"> <div
                                                className="header-banner f-right "> <img
                                            src="https://yae.hifive03.com/assets/img/app/app.jpg"
                                            alt="" /> <div className="app_overlay">
                                            <ul className="d-flex flex-wrap
                                                justify-content-between"> <li
                                                    className="mr-1"><a href="#">
                                                        <img className="w-100"
                                                            src="https://yae.hifive03.com/assets/img/app/app1.png"
                                                            alt="" /> </a></li>
                                                <li className="ml-1"><a href="#">
                                                    <img className="w-100"
                                                        src="https://yae.hifive03.com/assets/img/app/app2.png"
                                                        alt="" /> </a></li>
                                            </ul> </div> </div> </div> </div>
                        </div> </div> <div className="header-bottom header-sticky">
                        <div className="container"> <div className="row
                                align-items-center"> <div className="col-xl-10
                                    col-lg-8 col-md-12 header-flex">
                                <div className="sticky-logo"> <a
                                    href="index.html"><img
                                        src="https://yae.hifive03.com/assets/img/logo/logo.png"
                                        alt="" /></a> </div>
                                <div className="main-menu d-none d-md-block">
                                    <nav> <ul id="navigation"> <li><a
                                        href="index.html">Home</a></li>
                                        <li><a href="genres.html">Genres</a></li>
                                        <li><a href="manga_all.html">Latest
                                            Manga</a></li> <li><a
                                                href="blog.html">Blog</a></li>
                                        <li><a className="js-show-modal1"
                                            href="#"><i
                                                className="fa-regular
                                                            fa-user"></i>
                                            Login/Sign Up</a></li>
                                    </ul> </nav> </div> </div> <div
                                        className="col-lg-3 col-xl-2 col-md-12 d-flex
                                    justify-content-center"> <ul className="top-info
                                        d-flex flex-wrap text-center
                                        text-md-center "> <li
                                        className="js-show-modal-search"><i
                                            className="fa-solid
                                                fa-magnifying-glass"></i> <p
                                            className="info-text">Search Manga</p>
                                    </li> </ul>
                            </div>
                        </div>

                            <div className="modal-search-header flex-c-m trans-04
                                js-hide-modal-search"> <div
                                    className="container-search-header"> <button
                                        className="flex-c-m btn-hide-modal-search
                                        trans-04 js-hide-modal-search"> <img
                                            src="https://yae.hifive03.com/assets/img/icon/icon-close.png"
                                            alt="CLOSE" /> </button> <form
                                                className="wrap-search-header flex-w
                                        p-l-15"> <button className="flex-c-m
                                            trans-04"> <i className="fa-solid
                                                fa-magnifying-glass"></i>
                                        </button> <input className="plh3"
                                            type="text" name="search"
                                            placeholder="Search..." /> </form>
                                </div> </div> </div>
                        <div className="col-12"> <div className="mobile_menu d-block
                                d-md-none"></div> </div> </div> </div></div>
            </header>

        </>

    );
}