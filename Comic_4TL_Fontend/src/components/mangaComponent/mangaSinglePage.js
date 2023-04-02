import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MangaSinglePageServices from "../../services/mangaSinglePageServices";
import ListChappter from "../../page/Manga/ListChapter";
import FeedbackTemplate from "../../components/templateBook/feedbackTemplate";
import FeedbackServices from "../../services/FeedbackServices";

export default function MangaSingle() {
  const { search } = useLocation();
  let id = new URLSearchParams(search).get("id");
  const [manga, setManga] = useState([]);
  const [feedback, setFeedback] = useState([]);
  let [Countfeedback, setCountfeedback] = useState(0);
  let mangaSinglePageServices = new MangaSinglePageServices();
  let feedbackServices = new FeedbackServices();

  useEffect(() => {
    mangaSinglePageServices.getManga(id).then((res) => {
      setManga(res.data);
    });
    mangaSinglePageServices.countFeedback_MangaId(id).then((res) => {
      setCountfeedback(res.data);
    });
    feedbackServices.getFeedback_MangaId(id).then((res) => {
      setFeedback(res.data);
    });
  }, []);

  //get genre
  let listGenre,
    listGenreId = [];
  var check = ", ";
  for (var i in manga.listGenre) {
    if (i !== 0)
      listGenre.push(
        <a href="/genre">{check + manga.listGenre[i].genre.name}</a>
      );
    else listGenre.push(<a href="/genre">{manga.listGenre[i].genre.name}</a>);

    listGenreId.push(manga.listGenre[i].genreId);
  }

  //get description

  var des, readmore;
  des = manga.description;
  if (manga.description != null) {
    if (manga.description.length > 200) {
      des = manga.description.slice(0, 200);
      readmore = manga.description.slice(200, manga.description.length);
    }
  }

  //get chappter manga
  let listChapter = [];
  for (var i in manga.chapters) {
    listChapter.push(<ListChappter props={manga.chapters[i]} />);
  }

  //get feedback
  let listFeedback = [];
  for (var i in feedback) {
    listFeedback.push(<FeedbackTemplate props={feedback[i]} />);
  }

  return (
    <>
      <section id="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="manga_all.html">All Mangas</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {manga.name}
                  </li>
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
              <img className="w-100 img-fluid" src={manga.avatar} alt="" />
            </div>
            <div className="col-lg-6">
              <form className="form-1 mb-3 mt-3">
                <div className="form-field">
                  <select id="glsr-ltr" className="star-rating">
                    <option value="">Select a rating</option>
                    <option value="5">5</option>
                    <option value="4" selected="">
                      4
                    </option>
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
                    <p>{listGenre}</p>
                  </li>
                  <li className="d-flex flex-wrap watch">
                    <a className="mr-2" href="chapter/chapter.html">
                      Read First
                    </a>
                    <a href="chapter/chapter06.html">Read Last</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="manga_info">
                <ul>
                  <li className="d-flex mt-3">
                    <h6>Status </h6>
                  </li>
                  <li className="d-flex">
                    <div className="feedback_box">
                      <a href="#commentbox">
                        <i className="fa-solid fa-comments"></i>
                        <h6>{Countfeedback} Comments</h6>
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
                <p>
                  {des}
                  <span id="dots">...</span>
                  <span id="more">{readmore}.</span>
                </p>
                <button
                  id="read_more"
                  data-cf-modified-6c234f31212b61c935b6d039-=""
                  onClick={() => {
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
                >
                  Read more
                </button>
              </div>
              <div className="manga_info">
                <div className="section-tittle mt-30 mb-30">
                  <h3>LATEST MANGA RELEASES</h3>
                </div>
                <ul className="chapter mb-3">{listChapter}</ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section-tittle mb-30 mt-30">
                <h3>Related Manga</h3>
              </div>
              <a href="#">
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img
                      className="play"
                      src="assets/img/manga/small8.jpg"
                      alt=""
                    />
                    <div className="overlay_play2">
                      <i className="fa-solid fa-heart"> 61M</i>
                    </div>
                  </div>
                  <div className="trand-right-cap">
                    <h4>My Aunt </h4>
                    <ul className="d-flex flex-wrap star">
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-regular fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-regular fa-star"></i>
                      </li>
                    </ul>
                    <div className="tag2 d-flex flex-wrap">
                      <h6>Genre:</h6>
                      <ul className="d-flex flex-wrap">
                        <li>Action,</li>
                        <li>Comedy,</li>
                        <li>Drama,</li>
                        <li>Supernatural</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img
                      className="play"
                      src="assets/img/manga/small9.jpg"
                      alt=""
                    />
                    <div className="overlay_play2">
                      <i className="fa-solid fa-heart"> 89M</i>
                    </div>
                  </div>
                  <div className="trand-right-cap">
                    <h4>Son-in-Law Does Cheap Cultivation </h4>
                    <ul className="d-flex flex-wrap star">
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i
                          className="fa-solid
                                                fa-star-half-stroke"
                        ></i>
                      </li>
                    </ul>
                    <div className="tag2 d-flex flex-wrap">
                      <h6>Genre:</h6>
                      <ul className="d-flex flex-wrap">
                        <li>Action,</li>
                        <li>Comedy,</li>
                        <li>Drama,</li>
                        <li>Supernatural</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img
                      className="play"
                      src="assets/img/manga/small10.jpg"
                      alt=""
                    />
                    <div className="overlay_play2">
                      <i className="fa-solid fa-heart"> 99M</i>
                    </div>
                  </div>
                  <div className="trand-right-cap">
                    <h4>Gedou Tenisha no Harem Dungeon Seisakuki</h4>
                    <ul className="d-flex flex-wrap star">
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i
                          className="fa-solid
                                                fa-star-half-stroke"
                        ></i>
                      </li>
                      <li>
                        <i className="fa-regular fa-star"></i>
                      </li>
                    </ul>
                    <div className="tag2 d-flex flex-wrap">
                      <h6>Genre:</h6>
                      <ul className="d-flex flex-wrap">
                        <li>Action,</li>
                        <li>Comedy,</li>
                        <li>Drama,</li>
                        <li>Supernatural</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img
                      className="play"
                      src="assets/img/manga/small11.jpg"
                      alt=""
                    />
                    <div className="overlay_play2">
                      <i className="fa-solid fa-heart"> 61M</i>
                    </div>
                  </div>
                  <div className="trand-right-cap">
                    <h4>Kanojo, Okarishimasu </h4>
                    <ul className="d-flex flex-wrap star">
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                    </ul>
                    <div className="tag2 d-flex flex-wrap">
                      <h6>Genre:</h6>
                      <ul className="d-flex flex-wrap">
                        <li>Action,</li>
                        <li>Comedy,</li>
                        <li>Drama,</li>
                        <li>Supernatural</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
