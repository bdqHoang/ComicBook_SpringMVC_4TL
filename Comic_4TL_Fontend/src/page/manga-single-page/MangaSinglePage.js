import React from "react";

//317 co dong script

function MangaSinglePage() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="acme-news-ticker">
            <div className="acme-news-ticker-label">Update News</div>
            <div className="acme-news-ticker-box">
              <ul className="my-news-ticker">
                <li>
                  <a href="#">
                    <span>Latest News:</span>
                    Episode 12 of Spy x Family is scheduled to release worldwide
                    on Saturday, June 25th, 2022. The episode will be available
                    to stream on Crunchyroll and Netflix at 8:30 AM PDT (Pacific
                    Timing); however, the release time will vary depending on
                    your region.
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Latest News:</span>
                    Overlord Season 5 has yet to get confirmed in 2022. There is
                    no release date for the fifth season of this anime series.
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Latest News:</span>
                    The latest episode is packed with new information regarding
                    the Demon Realm. However, more mysteries unfold as well. Who
                    exactly is Amane? Here are all the details needed for The
                    Devil is a Part-Timer Season 2 Episode 7.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section id="breadcrumb">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="manga_all.html">All Mangas</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    The Boy in the All-Girls School{" "}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section id="manga_single_page" class="pt-50 pb-20">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="manga_name text-start">
                <h2>The Boy in the All-Girls School</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3">
              <img
                class="w-100 img-fluid"
                src="https://yae.hifive03.com/assets/img/manga_single/single1.jpg"
                alt=""
              />
            </div>
            <div class="col-lg-6">
              <form class="form-1 mb-3 mt-3">
                <div class="form-field">
                  <select id="glsr-ltr" class="star-rating">
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
              <div class="manga_info">
                <ul>
                  <li class="d-flex flex-wrap">
                    <h6>Rating</h6>
                    <p>Average 4 / 5 out of 87</p>
                  </li>
                  <li class="d-flex flex-wrap">
                    <h6>Rank </h6>
                    <p>N/A, it has 333.4K views </p>
                  </li>
                  <li class="d-flex flex-wrap">
                    <h6>Alternative </h6>
                    <p>
                      女子学院的男生 ; Boy in A Girls' School ; Nuzi Xueyuan de
                      Nansheng
                    </p>
                  </li>
                  <li class="d-flex flex-wrap">
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
                  <li class="d-flex flex-wrap">
                    <h6>Type </h6>
                    <p>Author(s) Chu dao manhua </p>
                  </li>
                  <li class="d-flex flex-wrap watch">
                    <a class="mr-2" href="chapter/chapter.html">
                      Read First
                    </a>
                    <a href="chapter/chapter06.html">Read Last</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="manga_info">
                <ul>
                  <li class="d-flex mt-3">
                    <h6>Status </h6>
                    <p>OnGoing </p>
                  </li>
                  <li class="d-flex">
                    <div class="feedback_box">
                      <a href="#commentbox">
                        <i class="fa-solid fa-comments"></i>
                        <h6>12 Comments</h6>
                      </a>
                    </div>
                    <div class="feedback_box">
                      <a href="#">
                        <i class="fa-solid fa-bookmark"></i>
                        <h6>Bookmark</h6>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8">
              <div class="section-tittle mt-30 mb-30">
                <h3>Summary</h3>
              </div>
              <div class="manga_info">
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
                {/* <script
                                type="6c234f31212b61c935b6d039-text/javascript">
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
              <div class="manga_info">
                <div class="section-tittle mt-30 mb-30">
                  <h3>LATEST MANGA RELEASES</h3>
                </div>
                <ul class="chapter mb-3">
                  <li>
                    <a
                      href="chapter/chapter.html"
                      class="d-flex flex-wrap
                                        justify-content-between"
                    >
                      <span>Chapter 00</span>
                      <span>07/19/2020</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chapter/chapter01.html"
                      class="d-flex flex-wrap
                                        justify-content-between"
                    >
                      <span>Chapter 1 - The Beginning of Everything </span>
                      <span>07/19/2020</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chapter/chapter02.html"
                      class="d-flex flex-wrap
                                        justify-content-between"
                    >
                      <span>Chapter 2 - Friends and Relatives</span>
                      <span>07/19/2020 </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chapter/chapter03.html"
                      class="d-flex flex-wrap
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
                      class="d-flex flex-wrap
                                        justify-content-between"
                    >
                      <span>Chapter 4 - A Surprise While Out Strolling </span>
                      <span>07/19/2020</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chapter/chapter05.html"
                      class="d-flex flex-wrap
                                        justify-content-between"
                    >
                      <span>Chapter 5 - Appropriate Countermeasures </span>
                      <span>07/19/2020</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="chapter/chapter06.html"
                      class="d-flex flex-wrap
                                        justify-content-between"
                    >
                      <span>Chapter 6 - First Day of School</span>
                      <span>07/19/2020 </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="section-tittle mb-30 mt-30">
                <h3>Related Manga</h3>
              </div>
              <a href="#">
                <div class="trand-right-single d-flex">
                  <div class="trand-right-img">
                    <img
                      class="play"
                      src="assets/img/manga/small8.jpg"
                      alt=""
                    />
                    <div class="overlay_play2">
                      <i class="fa-solid fa-heart"> 61M</i>
                    </div>
                  </div>
                  <div class="trand-right-cap">
                    <h4>My Aunt </h4>
                    <ul class="d-flex flex-wrap star">
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-regular fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-regular fa-star"></i>
                      </li>
                    </ul>
                    <div class="tag2 d-flex flex-wrap">
                      <h6>Genre:</h6>
                      <ul class="d-flex flex-wrap">
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
                <div class="trand-right-single d-flex">
                  <div class="trand-right-img">
                    <img
                      class="play"
                      src="assets/img/manga/small9.jpg"
                      alt=""
                    />
                    <div class="overlay_play2">
                      <i class="fa-solid fa-heart"> 89M</i>
                    </div>
                  </div>
                  <div class="trand-right-cap">
                    <h4>Son-in-Law Does Cheap Cultivation </h4>
                    <ul class="d-flex flex-wrap star">
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i
                          class="fa-solid
                                                fa-star-half-stroke"
                        ></i>
                      </li>
                    </ul>
                    <div class="tag2 d-flex flex-wrap">
                      <h6>Genre:</h6>
                      <ul class="d-flex flex-wrap">
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
                <div class="trand-right-single d-flex">
                  <div class="trand-right-img">
                    <img
                      class="play"
                      src="assets/img/manga/small10.jpg"
                      alt=""
                    />
                    <div class="overlay_play2">
                      <i class="fa-solid fa-heart"> 99M</i>
                    </div>
                  </div>
                  <div class="trand-right-cap">
                    <h4>Gedou Tenisha no Harem Dungeon Seisakuki</h4>
                    <ul class="d-flex flex-wrap star">
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i
                          class="fa-solid
                                                fa-star-half-stroke"
                        ></i>
                      </li>
                      <li>
                        <i class="fa-regular fa-star"></i>
                      </li>
                    </ul>
                    <div class="tag2 d-flex flex-wrap">
                      <h6>Genre:</h6>
                      <ul class="d-flex flex-wrap">
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
                <div class="trand-right-single d-flex">
                  <div class="trand-right-img">
                    <img
                      class="play"
                      src="assets/img/manga/small11.jpg"
                      alt=""
                    />
                    <div class="overlay_play2">
                      <i class="fa-solid fa-heart"> 61M</i>
                    </div>
                  </div>
                  <div class="trand-right-cap">
                    <h4>Kanojo, Okarishimasu </h4>
                    <ul class="d-flex flex-wrap star">
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                    </ul>
                    <div class="tag2 d-flex flex-wrap">
                      <h6>Genre:</h6>
                      <ul class="d-flex flex-wrap">
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
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-8">
              <div class="comment_area mb-50 clearfix">
                <h5 class="title">12 Comments</h5>
                <ol>
                  <li class="single_comment_area">
                    <div class="comment-content d-flex">
                      <div class="comment-author">
                        <img
                          class="w-100 img-fluid"
                          src="https://yae.hifive03.com/assets/img/comment/comment_1.png"
                          alt="author"
                        />
                      </div>

                      <div class="comment-meta">
                        <a href="#" class="post-date">
                          27 Aug 2024
                        </a>
                        <h5>Jerome Leonard</h5>
                        <p>
                          I'm usually an anime-only type person but watching the
                          first 3 episodes of this show made me read the manga
                          its actually amazing
                        </p>
                        <a href="#" class="like">
                          Like
                        </a>
                        <a href="#" class="reply">
                          Reply
                        </a>
                      </div>
                    </div>
                    <ol class="children">
                      <li class="single_comment_area">
                        <div class="comment-content d-flex">
                          <div class="comment-author">
                            <img
                              class="w-100 img-fluid"
                              src="https://yae.hifive03.com/assets/img/comment/comment_2.png"
                              alt="author"
                            />
                          </div>

                          <div class="comment-meta">
                            <a href="#" class="post-date">
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
                            <a href="#" class="like">
                              Like
                            </a>
                            <a href="#" class="reply">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </li>

                  <li class="single_comment_area">
                    <div class="comment-content d-flex">
                      <div class="comment-author">
                        <img
                          class="w-100 img-fluid"
                          src="https://yae.hifive03.com/assets/img/comment/comment_4.png"
                          alt="author"
                        />
                      </div>

                      <div class="comment-meta">
                        <a href="#" class="post-date">
                          27 Aug 2024
                        </a>
                        <h5>Melode Mash</h5>
                        <p>
                          Great show. Anya is lovely character. I hope the 3 of
                          them become a real family.{" "}
                        </p>
                        <a href="#" class="like">
                          Like
                        </a>
                        <a href="#" class="reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>

                  <li class="single_comment_area">
                    <div class="comment-content d-flex">
                      <div class="comment-author">
                        <img
                          class="w-100 img-fluid"
                          src="https://yae.hifive03.com/assets/img/comment/comment_3.png"
                          alt="author"
                        />
                      </div>

                      <div class="comment-meta">
                        <a href="#" class="post-date">
                          27 Aug 2024
                        </a>
                        <h5>Roger Marshall</h5>
                        <p>Anya is so freaking funny ! Im so happy T _ T </p>
                        <a href="#" class="like">
                          Like
                        </a>
                        <a href="#" class="reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="app-poster d-none d-lg-block">
                <img src="assets/img/collection/news_card.jpg" alt="" />
                <div class="app_overlay">
                  <ul
                    class="d-flex flex-wrap
                                    justify-content-between"
                  >
                    <li class="mr-1">
                      <a href="#">
                        <img
                          class="w-100"
                          src="https://yae.hifive03.com/assets/img/app/app1.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li class="ml-1">
                      <a href="#">
                        <img
                          class="w-100"
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
          <div class="row">
            <div class="col-12">
              <div class="comment-form">
                <h4>Leave a Reply</h4>
                <form
                  class="form-contact comment_form"
                  action="#"
                  id="commentForm"
                >
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea
                          class="form-control w-100"
                          name="comment"
                          id="comment"
                          cols="30"
                          rows="9"
                          placeholder="Write Comment"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="email"
                          id="email-comment"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="button button-contactForm btn_1 boxed-btn">
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

export default MangaSinglePage;