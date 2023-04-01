import React, { useEffect, useState } from "react";  
import { useLocation } from "react-router-dom";
import MangaSinglePageServices from "../../services/MangaSinglePageServices";
import ListChappter from "./ListChapter";

export default function MangaSignlePage() {
    const {search} = useLocation();
    let id = new URLSearchParams(search).get('id');;
    const [manga, setManga] = useState([]);
    let mangaSinglePageServices = new MangaSinglePageServices();

    useEffect(()=>{
        mangaSinglePageServices.getManga(id).then((res)=>{
            setManga(res.data);
        })
    },[])

    //get genre
    let listGenre, listGenreId = [];
    var check = ", ";
    for(var i in manga.listGenre){
        if(i !=0)
         listGenre.push(<a href="/genre">{check + manga.listGenre[i].genre.name}</a>);
        else
        listGenre.push(<a href="/genre">{manga.listGenre[i].genre.name}</a>);

        listGenreId.push(manga.listGenre[i].genreId)
    }

    

    //get description

    var des,readmore;
    des = manga.description;
    if(manga.description != null){
        if(manga.description.length > 200){
            des = manga.description.slice(0,200);
            readmore = manga.description.slice(200,manga.description.length);
        }
    }


    //get chappter manga
    let listChapter = [];
    for(var i in manga.chapters){
        listChapter.push(<ListChappter props = {manga.chapters[i]}/>)
    }


    return (
        <>
<section id="breadcrumb">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="manga_all.html">All Mangas</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{manga.name} </li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</section>

<section id="manga_single_page" className="pt-50 pb-20">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="manga_name text-start">
                    <h2>{manga.name}</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3">
                <img className="w-100 img-fluid" src={manga.avatar}
                    alt="" />
            </div>
            <div className="col-lg-6">
                <form className="form-1 mb-3 mt-3">
                    <div className="form-field">
                        <select id="glsr-ltr" className="star-rating">
                            <option value="">Select a rating</option>
                            <option value="5">5</option>
                            <option value="4" selected="">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                </form>
                <div className="manga_info">
                    <ul>
                        <li className="d-flex flex-wrap">
                            <h6>Rating</h6>
                            <p>Average {manga.ratting} / 5</p>
                        </li>
                        <li className="d-flex flex-wrap">
                            <h6>Rank </h6>
                            <p>N/A, it has {manga.views} views </p>
                        </li>
                        <li className="d-flex flex-wrap">
                            <h6>Genre(s) </h6>
                            <p>
                                {listGenre}
                            </p>
                        </li>
                        <li className="d-flex flex-wrap watch">
                            <a className="mr-2" href="chapter/chapter.html">Read First</a><a
                                href="chapter/chapter06.html">Read Last</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="manga_info">
                    <ul>
                        <li className="d-flex mt-3">
                            <h6>Status </h6>
                            <p>OnGoing </p>
                        </li>
                        <li className="d-flex">
                            <div className="feedback_box">
                                <a href="#commentbox">
                                    <i className="fa-solid fa-comments"></i>
                                    <h6>12 Comments</h6>
                                </a>
                            </div>
                            <div className="feedback_box">
                                <a href="#">
                                    <i className="fa-solid fa-bookmark"></i>
                                    <h6>Bookmark
                                    </h6>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-8">
                <div className="section-tittle mt-30 mb-30">
                    <h3>Summary</h3>
                </div>
                <div className="manga_info">
                    <p>{des}<span id="dots">...</span><span id="more">
                        {readmore}
                        .</span></p>
                    <button id="read_more"data-cf-modified-6c234f31212b61c935b6d039-=""
                        onClick={()=>{
                            var dots = document.getElementById("dots");
                            var moreText = document.getElementById("more");
                            var btnText = document.getElementById("read_more");
                        
                            if (dots.style.display === "none") {
                                dots.style.display = "inline";
                                btnText.innerHTML = "Read more"; 
                                moreText.style.display = "none";
                            } else {
                                dots.style.display = "none";
                                btnText.innerHTML = "Read less"; 
                                moreText.style.display = "inline";
                            }
                        }}
                    >Read more</button>
                    
                </div>
                <div className="manga_info">
                    <div className="section-tittle mt-30 mb-30">
                        <h3>LATEST MANGA RELEASES</h3>
                    </div>
                    <ul className="chapter mb-3">
                       {listChapter}
                    </ul>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="section-tittle mb-30 mt-30">
                    <h3>Related Manga</h3>
                </div>




                

            </div>
        </div>
    </div>
</section>

<section id="commentbox">
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-8">

                <div className="comment_area mb-50 clearfix">
                    <h5 className="title">12 Comments</h5>
                    <ol>

                        <li className="single_comment_area">

                            <div className="comment-content d-flex">

                                <div className="comment-author">
                                    <img className="w-100 img-fluid"
                                        src="https://yae.hifive03.com/assets/img/comment/comment_1.png" alt="author" />
                                </div>

                                <div className="comment-meta">
                                    <a href="#" className="post-date">27 Aug
                                        2024</a>
                                    <h5>Jerome Leonard</h5>
                                    <p>I'm usually an anime-only type
                                        person but watching the first 3
                                        episodes of
                                        this show made me read the manga
                                        its actually amazing</p>
                                    <a href="#" className="like">Like</a>
                                    <a href="#" className="reply">Reply</a>
                                </div>
                            </div>
                            <ol className="children">
                                <li className="single_comment_area">

                                    <div className="comment-content d-flex">
                                        <div className="comment-author">
                                            <img className="w-100 img-fluid"
                                                src="https://yae.hifive03.com/assets/img/comment/comment_2.png"
                                                alt="author" />
                                        </div>

                                        <div className="comment-meta">
                                            <a href="#" className="post-date">27 Aug
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
                                            <a href="#" className="like">Like</a>
                                            <a href="#" className="reply">Reply</a>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </li>

                        <li className="single_comment_area">

                            <div className="comment-content d-flex">

                                <div className="comment-author">
                                    <img className="w-100 img-fluid"
                                        src="https://yae.hifive03.com/assets/img/comment/comment_4.png" alt="author" />
                                </div>

                                <div className="comment-meta">
                                    <a href="#" className="post-date">27 Aug
                                        2024</a>
                                    <h5>Melode Mash</h5>
                                    <p>Great show. Anya is lovely
                                        character. I hope the 3 of them
                                        become a real
                                        family. </p>
                                    <a href="#" className="like">Like</a>
                                    <a href="#" className="reply">Reply</a>
                                </div>
                            </div>
                        </li>

                        <li className="single_comment_area">

                            <div className="comment-content d-flex">

                                <div className="comment-author">
                                    <img className="w-100 img-fluid"
                                        src="https://yae.hifive03.com/assets/img/comment/comment_3.png" alt="author" />
                                </div>

                                <div className="comment-meta">
                                    <a href="#" className="post-date">27 Aug
                                        2024</a>
                                    <h5>Roger Marshall</h5>
                                    <p>Anya is so freaking funny ! Im so
                                        happy T _ T </p>
                                    <a href="#" className="like">Like</a>
                                    <a href="#" className="reply">Reply</a>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="app-poster d-none d-lg-block">
                    <img src="assets/img/collection/news_card.jpg" alt="" />
                    <div className="app_overlay">
                        <ul className="d-flex flex-wrap
                                    justify-content-between">
                            <li className="mr-1"><a href="#">
                                    <img className="w-100" src="https://yae.hifive03.com/assets/img/app/app1.png" alt="" />
                                </a></li>
                            <li className="ml-1"><a href="#">
                                    <img className="w-100" src="https://yae.hifive03.com/assets/img/app/app2.png" alt="" />
                                </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="comment-form">
                    <h4>Leave a Reply</h4>
                    <form className="form-contact comment_form" action="#" id="commentForm">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9"
                                        placeholder="Write Comment"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="button
                                        button-contactForm btn_1 boxed-btn">Send
                                Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    )
}