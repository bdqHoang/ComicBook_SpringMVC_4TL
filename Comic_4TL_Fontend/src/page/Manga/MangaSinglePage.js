import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MangaSinglePageServices from "../../services/mangaSinglePageServices";

export default function MangaSignlePage() {
  const { search } = useLocation();
  let id = new URLSearchParams(search).get("id");
  const [manga, setManga] = useState([]);
  let mangaSinglePageServices = new MangaSinglePageServices();

  useEffect(() => {
    mangaSinglePageServices.getManga(id).then((res) => {
      setManga(res.data);
    });
  }, []);
  console.log(manga);
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
                    The Boy in the All-Girls School{" "}
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
                <h2>The Boy in the All-Girls School</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <img
                className="w-100 img-fluid"
                src="https://yae.hifive03.com/assets/img/manga_single/single1.jpg"
                alt=""
              />
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
                    <p>Average 4 / 5 out of 87</p>
                  </li>
                  <li className="d-flex flex-wrap">
                    <h6>Rank </h6>
                    <p>N/A, it has 333.4K views </p>
                  </li>
                  <li className="d-flex flex-wrap">
                    <h6>Alternative </h6>
                    <p>
                      女子学院的男生 ; Boy in A Girls' School ; Nuzi Xueyuan de
                      Nansheng
                    </p>
                  </li>
                  <li className="d-flex flex-wrap">
                    <h6>Genre(s) </h6>
                    <p>
                      <a href="genres.html">Comedy</a>,
                      <a href="genres.html">Harem</a>,
                      <a href="genres.html">Romance</a>,
                      <a href="genres.html">School life</a>,
                      <a href="genres.html">Shounen</a>,
                      <a href="genres.html">Slice of life</a>
                    </p>
                  </li>
                  <li className="d-flex flex-wrap">
                    <h6>Type </h6>
                    <p>Author(s) Chu dao manhua </p>
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
                        <h6>Bookmark</h6>
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
                  In an all-girls school full of jaw-dropping beauties, a male
                  student suddenly transfers in!!! Perhaps in the eyes of
                  others, this would be a dream-like paradise, but in reality,
                  the future is completely unimaginable{" "}
                  <span id="dots">...</span>
                  <span id="more">
                    erisque enim ligula venenatis dolor. Maecenas nisl est,
                    ultrices nec congue eget, auctor vitae massa. Fusce luctus
                    vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed
                    ullamcorper ipsum dignissim ac. In at libero sed nunc
                    venenatis imperdiet sed ornare turpis. Donec vitae dui eget
                    tellus gravida venenatis. Integer fringilla congue eros non
                    fermentum. Sed dapibus pulvinar nibh tempor porta.
                  </span>
                </p>
                <button
                  onclick="if (!window.__cfRLUnblockHandlers)
                                return false; myFunction()"
                  id="read_more"
                  data-cf-modified-6c234f31212b61c935b6d039-=""
                >
                  Read more
                </button>
                {/* <script type="6c234f31212b61c935b6d039-text/javascript">
                        function myFunction() {
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
                        }
                    </script> */}
              </div>
              <div className="manga_info">
                <div className="section-tittle mt-30 mb-30">
                  <h3>LATEST MANGA RELEASES</h3>
                </div>
                <ul className="chapter mb-3">
                  <li>
                    <a
                      href="chapter/chapter.html"
                      className="d-flex flex-wrap
                                        justify-content-between"
                    >
                      <span>Chapter 00</span>
                      <span>07/19/2020</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chapter/chapter01.html"
                      className="d-flex flex-wrap
                                        justify-content-between"
                    >
                      <span>Chapter 1 - The Beginning of Everything </span>
                      <span>07/19/2020</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chapter/chapter02.html"
                      className="d-flex flex-wrap
                                        justify-content-between"
                    >
                      <span>Chapter 2 - Friends and Relatives</span>
                      <span>07/19/2020 </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chapter/chapter03.html"
                      className="d-flex flex-wrap
                                        justify-content-between"
                    >
                      <span>
                        Chapter 3 - First Visit to the All-Girls School{" "}
                      </span>
                      <span>07/19/2020</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chapter/chapter04.html"
                      className="d-flex flex-wrap
                                        justify-content-between"
                    >
                      <span>Chapter 4 - A Surprise While Out Strolling </span>
                      <span>07/19/2020</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chapter/chapter05.html"
                      className="d-flex flex-wrap
                                        justify-content-between"
                    >
                      <span>Chapter 5 - Appropriate Countermeasures </span>
                      <span>07/19/2020</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chapter/chapter06.html"
                      className="d-flex flex-wrap
                                        justify-content-between"
                    >
                      <span>Chapter 6 - First Day of School</span>
                      <span>07/19/2020 </span>
                    </a>
                  </li>
                </ul>
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
                        <img
                          className="w-100 img-fluid"
                          src="https://yae.hifive03.com/assets/img/comment/comment_1.png"
                          alt="author"
                        />
                      </div>

                      <div className="comment-meta">
                        <a href="#" className="post-date">
                          27 Aug 2024
                        </a>
                        <h5>Jerome Leonard</h5>
                        <p>
                          I'm usually an anime-only type person but watching the
                          first 3 episodes of this show made me read the manga
                          its actually amazing
                        </p>
                        <a href="#" className="like">
                          Like
                        </a>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </div>
                    </div>
                    <ol className="children">
                      <li className="single_comment_area">
                        <div className="comment-content d-flex">
                          <div className="comment-author">
                            <img
                              className="w-100 img-fluid"
                              src="https://yae.hifive03.com/assets/img/comment/comment_2.png"
                              alt="author"
                            />
                          </div>

                          <div className="comment-meta">
                            <a href="#" className="post-date">
                              27 Aug 2024
                            </a>
                            <h5>Theodore Adkins</h5>
                            <p>
                              I started watching this by accident and it's so
                              funny. Anya is possibly the cutest anime character
                              I've seen in a while (and not in that cutesy anime
                              ick way). I really want them to be a family in the
                              end, even if the mission fails.{" "}
                            </p>
                            <a href="#" className="like">
                              Like
                            </a>
                            <a href="#" className="reply">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </li>

                  <li className="single_comment_area">
                    <div className="comment-content d-flex">
                      <div className="comment-author">
                        <img
                          className="w-100 img-fluid"
                          src="https://yae.hifive03.com/assets/img/comment/comment_4.png"
                          alt="author"
                        />
                      </div>

                      <div className="comment-meta">
                        <a href="#" className="post-date">
                          27 Aug 2024
                        </a>
                        <h5>Melode Mash</h5>
                        <p>
                          Great show. Anya is lovely character. I hope the 3 of
                          them become a real family.{" "}
                        </p>
                        <a href="#" className="like">
                          Like
                        </a>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="single_comment_area">
                    <div className="comment-content d-flex">
                      <div className="comment-author">
                        <img
                          className="w-100 img-fluid"
                          src="https://yae.hifive03.com/assets/img/comment/comment_3.png"
                          alt="author"
                        />
                      </div>

                      <div className="comment-meta">
                        <a href="#" className="post-date">
                          27 Aug 2024
                        </a>
                        <h5>Roger Marshall</h5>
                        <p>Anya is so freaking funny ! Im so happy T _ T </p>
                        <a href="#" className="like">
                          Like
                        </a>
                        <a href="#" className="reply">
                          Reply
                        </a>
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
                  <ul
                    className="d-flex flex-wrap
                                    justify-content-between"
                  >
                    <li className="mr-1">
                      <a href="#">
                        <img
                          className="w-100"
                          src="https://yae.hifive03.com/assets/img/app/app1.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="ml-1">
                      <a href="#">
                        <img
                          className="w-100"
                          src="https://yae.hifive03.com/assets/img/app/app2.png"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="comment-form">
                <h4>Leave a Reply</h4>
                <form
                  className="form-contact comment_form"
                  action="#"
                  id="commentForm"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control w-100"
                          name="comment"
                          id="comment"
                          cols="30"
                          rows="9"
                          placeholder="Write Comment"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="button
                                        button-contactForm btn_1 boxed-btn"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
