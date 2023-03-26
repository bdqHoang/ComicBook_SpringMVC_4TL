import React from 'react';

/* 305/240  co dong script*/

function Chapter() {
  return (
    <>
        <div class="wrap">
            <canvas id="sakura"></canvas>
        </div>


        <div id="preloader-active">
            <div class="preloader d-flex align-items-center
                justify-content-center">
                <div class="preloader-inner position-relative">
                    <div class="preloader-circle"></div>
                    <div class="preloader-img pere-text">
                        <img
                            src="https://yae.hifive03.com/assets/img/logo/preloader.png"
                            alt=""/>
                    </div>
                </div>
            </div>
        </div>


        <header>
            <div class="header-area">
                <div class="main-header ">
                    <div class="header-top d-none d-md-block">
                        <div class="container">
                            <div class="col-xl-12">
                                <div class="header-info-right d-flex
                                    justify-content-end">
                                    <ul class="header-social">
                                        <li><a data-toggle="tooltip"
                                                data-placement="top"
                                                title="Facebook" href="#"><i
                                                    class="fa-brands
                                                    fa-facebook-f"></i></a></li>
                                        <li><a data-toggle="tooltip"
                                                data-placement="top"
                                                title="Twitter" href="#"><i
                                                    class="fa-brands
                                                    fa-twitter"></i></a></li>
                                        <li><a data-toggle="tooltip"
                                                data-placement="top"
                                                title="Discord" href="#"><i
                                                    class="fa-brands
                                                    fa-discord"></i></a></li>
                                        <li><a data-toggle="tooltip"
                                                data-placement="top"
                                                title="Reddit" href="#"><i
                                                    class="fa-brands
                                                    fa-reddit-alien"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-mid d-none d-md-block">
                        <div class="container">
                            <div class="row d-flex align-items-center">

                                <div class="col-xl-3 col-lg-3 col-md-3">
                                    <div class="logo">
                                        <a href="../index.html"><img
                                                src="https://yae.hifive03.com/assets/img/logo/logo.png"
                                                alt=""/></a>
                                    </div>
                                </div>
                                <div class="col-xl-9 col-lg-9 col-md-9">
                                    <div class="header-banner f-right ">
                                        <img
                                            src="https://yae.hifive03.com/assets/img/app/app.jpg"
                                            alt=""/>
                                        <div class="app_overlay">
                                            <ul class="d-flex flex-wrap
                                                justify-content-between">
                                                <li class="mr-1"><a href="#">
                                                        <img class="w-100"
                                                            src="https://yae.hifive03.com/assets/img/app/app1.png"
                                                            alt=""/>
                                                    </a></li>
                                                <li class="ml-1"><a href="#">
                                                        <img class="w-100"
                                                            src="https://yae.hifive03.com/assets/img/app/app2.png"
                                                            alt=""/>
                                                    </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-bottom header-sticky">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-xl-10 col-lg-8 col-md-12
                                    header-flex">

                                    <div class="sticky-logo">
                                        <a href="../index.html"><img
                                                src="https://yae.hifive03.com/assets/img/logo/logo.png"
                                                alt=""/></a>
                                    </div>

                                    <div class="main-menu d-none d-md-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><a href="../index.html">Home</a></li>
                                                <li><a href="../genres.html">Genres</a></li>
                                                <li><a href="../manga_all.html">Latest
                                                        Manga</a></li>
                                                <li><a href="../blog.html">Blog</a></li>
                                                <li><a class="js-show-modal1"
                                                        href="#"><i
                                                            class="fa-regular
                                                            fa-user"></i>
                                                        Login/Sign Up</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-xl-2 col-md-12 d-flex
                                    justify-content-center">
                                    <ul class="top-info d-flex flex-wrap
                                        text-center text-md-center ">
                                        <li class="js-show-modal-search"><i
                                                class="fa-solid
                                                fa-magnifying-glass"></i>
                                            <p class="info-text">Search Manga</p>
                                        </li>
                                    </ul>

                                </div>

                            </div>


                            <div class="modal-search-header flex-c-m trans-04
                                js-hide-modal-search">
                                <div class="container-search-header">
                                    <button class="flex-c-m
                                        btn-hide-modal-search trans-04
                                        js-hide-modal-search">
                                        <img
                                            src="https://yae.hifive03.com/assets/img/icon/icon-close.png"
                                            alt="CLOSE"/>
                                    </button>
                                    <form class="wrap-search-header flex-w
                                        p-l-15">
                                        <button class="flex-c-m trans-04">
                                            <i class="fa-solid
                                                fa-magnifying-glass"></i>
                                        </button>
                                        <input class="plh3" type="text"
                                            name="search"
                                            placeholder="Search..."/>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="mobile_menu d-block d-md-none"></div>
                        </div>
                    </div>
                </div>
            </div>

        </header>


        <section id="breadcrumb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a
                                        href="../index.html">Home</a></li>
                                <li class="breadcrumb-item"><a
                                        href="../manga_all.html">All Mangas</a></li>
                                <li class="breadcrumb-item"><a
                                        href="../manga_single_page.html">The Boy
                                        in the All-Girls
                                        School </a></li>
                                <li class="breadcrumb-item active"
                                    aria-current="page">The Boy in the All-Girls
                                    School -
                                    Chapter 0</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>


        <section id="chapter" class="pt-50 pb-20">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="manga_name text-start">
                            <h2>The Boy in the All-Girls School</h2>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="feedback_box d-flex flex-wrap
                            justify-content-end">
                            <a class="Bookmark" data-toggle="tooltip"
                                data-placement="top" title="Bookmark" href="#">
                                <i class="fa-solid fa-bookmark"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-30 mt-30">
                        <select class="form-select form-select-sm"
                            aria-label=".form-select-sm example" onchange="if
                            (!window.__cfRLUnblockHandlers) return false;
                            javascript:handleSelect(this)"
                            data-cf-modified-60063e96678437510989fb24-="">
                            <option selected disabled>Chapter 00</option>
                            <option value="../chapter/chapter01">Chapter 1 - The
                                Beginning of Everything </option>
                            <option value="../chapter/chapter02">Chapter 2 -
                                Friends and Relatives </option>
                            <option value="../chapter/chapter03">Chapter 3 -
                                First Visit to the All-Girls School </option>
                            <option value="../chapter/chapter04">Chapter 4 - A
                                Surprise While Out Strolling </option>
                            <option value="../chapter/chapter05">Chapter 5 -
                                Appropriate Countermeasures </option>
                            <option value="../chapter/chapter06">Chapter 6 -
                                First Day of School </option>
                        </select>
                        {/* <script type="60063e96678437510989fb24-text/javascript">
                        function handleSelect(elm) {
                            window.location = elm.value + ".html";
                        }
                        </script> */}
                    </div>
                    <div class="col-lg-6 mb-30 mt-30">
                        <div class="manga_info">
                            <ul>
                                <li class="d-flex flex-wrap watch
                                    justify-content-end">
                                    <a href="../chapter/chapter01.html">Next <i
                                            class="fa-solid fa-arrow-right"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12"><img class="w-100 img-fluid
                            align-items-center"
                            src="https://yae.hifive03.com/assets/img/chapter/chapter00/1.jpg"
                            alt=""/></div>
                    <div class="col-12"><img class="w-100 img-fluid
                            align-items-center"
                            src="https://yae.hifive03.com/assets/img/chapter/chapter00/2.jpg"
                            alt=""/></div>
                    <div class="col-12"><img class="w-100 img-fluid
                            align-items-center"
                            src="https://yae.hifive03.com/assets/img/chapter/chapter00/3.jpg"
                            alt=""/></div>
                    <div class="col-12"><img class="w-100 img-fluid
                            align-items-center"
                            src="https://yae.hifive03.com/assets/img/chapter/chapter00/4.jpg"
                            alt=""/></div>
                    <div class="col-12"><img class="w-100 img-fluid
                            align-items-center"
                            src="https://yae.hifive03.com/assets/img/chapter/chapter00/5.jpg"
                            alt=""/></div>
                    <div class="col-12"><img class="w-100 img-fluid
                            align-items-center"
                            src="https://yae.hifive03.com/assets/img/chapter/chapter00/6.jpg"
                            alt=""/></div>
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-30 mt-30">
                        <select class="form-select form-select-sm"
                            aria-label=".form-select-sm example" onchange="if
                            (!window.__cfRLUnblockHandlers) return false;
                            javascript:handleSelect(this)"
                            data-cf-modified-60063e96678437510989fb24-="">
                            <option selected disabled>Chapter 00</option>
                            <option value="../chapter/chapter01">Chapter 1 - The
                                Beginning of Everything </option>
                            <option value="../chapter/chapter02">Chapter 2 -
                                Friends and Relatives </option>
                            <option value="../chapter/chapter03">Chapter 3 -
                                First Visit to the All-Girls School </option>
                            <option value="../chapter/chapter04">Chapter 4 - A
                                Surprise While Out Strolling </option>
                            <option value="../chapter/chapter05">Chapter 5 -
                                Appropriate Countermeasures </option>
                            <option value="../chapter/chapter06">Chapter 6 -
                                First Day of School </option>
                        </select>
                        {/* 
                        <script type="60063e96678437510989fb24-text/javascript">
                        function handleSelect(elm) {
                            window.location = elm.value + ".html";
                        }
                        </script> */}
                    </div>
                    <div class="col-lg-6 mb-30 mt-30">
                        <div class="manga_info">
                            <ul>
                                <li class="d-flex flex-wrap watch
                                    justify-content-end">
                                    <a href="../chapter/chapter01.html">Next <i
                                            class="fa-solid fa-arrow-right"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="commentbox">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8">

                        <div class="comment_area mb-50 clearfix">
                            <h5 class="title">12 Comments</h5>
                            <ol>

                                <li class="single_comment_area">

                                    <div class="comment-content d-flex">

                                        <div class="comment-author">
                                            <img class="w-100 img-fluid"
                                                src="https://yae.hifive03.com/assets/img/comment/comment_1.png"
                                                alt="author"/>
                                        </div>

                                        <div class="comment-meta">
                                            <a href="#" class="post-date">27 Aug
                                                2024</a>
                                            <h5>Jerome Leonard</h5>
                                            <p>I'm usually an anime-only type
                                                person but watching the first 3
                                                episodes of
                                                this show made me read the manga
                                                its actually amazing</p>
                                            <a href="#" class="like">Like</a>
                                            <a href="#" class="reply">Reply</a>
                                        </div>
                                    </div>
                                    <ol class="children">
                                        <li class="single_comment_area">

                                            <div class="comment-content d-flex">
                                                <div class="comment-author">
                                                    <img class="w-100 img-fluid"
                                                        src="https://yae.hifive03.com/assets/img/comment/comment_2.png"
                                                        alt="author"/>
                                                </div>

                                                <div class="comment-meta">
                                                    <a href="#"
                                                        class="post-date">27 Aug
                                                        2024</a>
                                                    <h5>Theodore Adkins</h5>
                                                    <p>I started watching this
                                                        by accident and it's so
                                                        funny. Anya is
                                                        possibly the cutest
                                                        anime character I've
                                                        seen in a while (and not
                                                        in
                                                        that cutesy anime ick
                                                        way). I really want them
                                                        to be a family in the
                                                        end, even if the mission
                                                        fails. </p>
                                                    <a href="#" class="like">Like</a>
                                                    <a href="#" class="reply">Reply</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </li>

                                <li class="single_comment_area">

                                    <div class="comment-content d-flex">

                                        <div class="comment-author">
                                            <img class="w-100 img-fluid"
                                                src="https://yae.hifive03.com/assets/img/comment/comment_4.png"
                                                alt="author"/>
                                        </div>

                                        <div class="comment-meta">
                                            <a href="#" class="post-date">27 Aug
                                                2024</a>
                                            <h5>Melode Mash</h5>
                                            <p>Great show. Anya is lovely
                                                character. I hope the 3 of them
                                                become a real
                                                family. </p>
                                            <a href="#" class="like">Like</a>
                                            <a href="#" class="reply">Reply</a>
                                        </div>
                                    </div>
                                </li>

                                <li class="single_comment_area">

                                    <div class="comment-content d-flex">

                                        <div class="comment-author">
                                            <img class="w-100 img-fluid"
                                                src="https://yae.hifive03.com/assets/img/comment/comment_3.png"
                                                alt="author"/>
                                        </div>

                                        <div class="comment-meta">
                                            <a href="#" class="post-date">27 Aug
                                                2024</a>
                                            <h5>Roger Marshall</h5>
                                            <p>Anya is so freaking funny ! Im so
                                                happy T _ T </p>
                                            <a href="#" class="like">Like</a>
                                            <a href="#" class="reply">Reply</a>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="app-poster d-none d-lg-block">
                            <img
                                src="https://yae.hifive03.com/assets/img/collection/news_card.jpg"
                                alt=""/>
                            <div class="app_overlay">
                                <ul class="d-flex flex-wrap
                                    justify-content-between">
                                    <li class="mr-1"><a href="#">
                                            <img class="w-100"
                                                src="https://yae.hifive03.com/assets/img/app/app1.png"
                                                alt=""/>
                                        </a></li>
                                    <li class="ml-1"><a href="#">
                                            <img class="w-100"
                                                src="https://yae.hifive03.com/assets/img/app/app2.png"
                                                alt=""/>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="comment-form">
                            <h4>Leave a Reply</h4>
                            <form class="form-contact comment_form" action="#"
                                id="commentForm">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <textarea class="form-control w-100"
                                                name="comment" id="comment"
                                                cols="30" rows="9"
                                                placeholder="Write Comment"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control"
                                                name="name" id="name"
                                                type="text" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control"
                                                name="email" id="email-comment"
                                                type="email"
                                                placeholder="Email"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="button
                                        button-contactForm btn_1 boxed-btn">Send
                                        Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <footer id="footer" class="footer bg-overlay">
            <div class="footer-main">
                <div class="container">
                    <div class="row">
                        <div class="footer_img">
                            <img class=""
                                src="https://yae.hifive03.com/assets/img/logo/girl.png"
                                alt=""/>
                        </div>
                        <div class="col-lg-12">
                            <div class="AtoZ_list">
                                <div class="d-flex flex-wrap">
                                    <h4>A-Z LIST</h4>
                                    <p>Searching manga order by alphabet name A
                                        to Z.</p>
                                </div>
                                <ul class="d-flex flex-wrap">
                                    <li><a href="#">ALL</a></li>
                                    <li><a href="#">#</a></li>
                                    <li><a href="#">0-9</a></li>
                                    <li><a href="#">B</a></li>
                                    <li><a href="#">C</a></li>
                                    <li><a href="#">D</a></li>
                                    <li><a href="#">E</a></li>
                                    <li><a href="#">F</a></li>
                                    <li><a href="#">G</a></li>
                                    <li><a href="#">H</a></li>
                                    <li><a href="#">I</a></li>
                                    <li><a href="#">J</a></li>
                                    <li><a href="#">K</a></li>
                                    <li><a href="#">L</a></li>
                                    <li><a href="#">M</a></li>
                                    <li><a href="#">N</a></li>
                                    <li><a href="#">O</a></li>
                                    <li><a href="#">P</a></li>
                                    <li><a href="#">Q</a></li>
                                    <li><a href="#">R</a></li>
                                    <li><a href="#">S</a></li>
                                    <li><a href="#">T</a></li>
                                    <li><a href="#">U</a></li>
                                    <li><a href="#">V</a></li>
                                    <li><a href="#">W</a></li>
                                    <li><a href="#">X</a></li>
                                    <li><a href="#">Y</a></li>
                                    <li><a href="#">Z</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-between mt-5">
                        <div class="col-lg-4 col-md-6 footer-widget
                            footer-about">
                            <img loading="lazy" class="footer-logo"
                                src="https://yae.hifive03.com/assets/img/logo/logo.png"
                                alt="logo"/>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor inci
                                done
                                idunt ut
                                labore et dolore magna aliqua.</p>
                            <div class="footer-social">
                                <ul>
                                    <li><a href="#" aria-label="Facebook"><i
                                                class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" aria-label="Twitter"><i
                                                class="fab fa-twitter"></i></a>
                                    </li>
                                    <li><a href="#" aria-label="Instagram"><i
                                                class="fa-brands fa-discord"></i></a></li>
                                    <li><a href="#" aria-label="Github"><i
                                                class="fa-brands
                                                fa-reddit-alien"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 footer-widget mt-5
                            mt-md-0">
                            <h3 class="widget-title">Help</h3>
                            <ul class="list-arrow text-capitalize">
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">privacy policy</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0
                            footer-widget">
                            <h3 class="widget-title">Links</h3>
                            <ul class="list-arrow text-capitalize">
                                <li><a href="#">A-Z List</a></li>
                                <li><a href="#">Upcoming</a></li>
                                <li><a href="#">Most Popular</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="copyright-info">
                                <span>Copyright &copy; <script
                                        type="60063e96678437510989fb24-text/javascript">
                                    document.write(new Date().getFullYear())
                                </script>,
                                    Designed by <a
                                        href="https://www.templatemonster.com/authors/soulknight404/">SoulKnight404</a></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="footer-menu text-center text-md-right">
                                <ul class="list-unstyled">
                                    <li><a href="about.html">Contact</a></li>
                                    <li><a href="team.html">FAQ</a></li>
                                    <li><a href="news-left-sidebar.html">Privacy
                                            Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="back-to-top" data-spy="affix" data-offset-top="10"
                        class="back-to-top position-fixed">
                        <button class="btn btn-primary" title="Back to Top">
                            <i class="fa fa-angle-double-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>


        <div class="wrap-modal1 js-modal1 p-t-60 p-b-20">
            <div class="overlay-modal1 js-hide-modal1" style="background:
                url(https://yae.hifive03.com/assets/img/manga_banner/log.jpg)
                fixed no-repeat
                center/cover ;"></div>
            <div class="container">
                <div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                    <button class="how-pos3 hov3 trans-04 js-hide-modal1">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <div class="row">
                        <div class="col-lg-6 m-auto">
                            <form id="form" novalidate action="#" method="post">
                                <div class="tit_form">
                                    <h3>Join Yae Manga House Now</h3>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email
                                        address</label>
                                    <input type="email" data-validation="email"
                                        data-content="Email has a invalid
                                        format" class="form-control"
                                        name="email" id="email"/>
                                    <div class="form_text">We'll never share
                                        your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1"
                                        class="form-label">Password</label>
                                    <input type="password" class="form-control"
                                        id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox"
                                        class="form-check-input"
                                        id="exampleCheck1"/>
                                    <label class="form-check-label"
                                        for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="modal_btn
                                    text-center">Submit</button>
                                <div class="form_icons">
                                    <div class="icon_tit">Sign in with social
                                        account</div>
                                    <ul class="d-flex flex-wrap text-center
                                        justify-content-center ">
                                        <li class="goo"><a href="#"><i
                                                    class="fa-brands fa-google"></i></a></li>
                                        <li class="fac"><a href="#"><i
                                                    class="fa-brands
                                                    fa-facebook-f"></i></a></li>
                                        <li class="twi"><a href="#"><i
                                                    class="fa-brands
                                                    fa-twitter"></i></a></li>
                                        <li class="ins"><a href="#"><i
                                                    class="fa-brands
                                                    fa-instagram"></i></a></li>
                                        <li class="pat"><a href="#"><i
                                                    class="fa-brands
                                                    fa-patreon"></i></a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}