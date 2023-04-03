import React from "react";

//135 73
function Chapter() {
  return (
    <>
      <div class="wrap">
        <canvas id="sakura"></canvas>
      </div>
      <section id="breadcrumb">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="../index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="../manga_all.html">All Mangas</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="../manga_single_page.html">
                      The Boy in the All-Girls School{" "}
                    </a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    The Boy in the All-Girls School - Chapter 0
                  </li>
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
              <div
                class="feedback_box d-flex flex-wrap
                            justify-content-end"
              >
                <a
                  class="Bookmark"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Bookmark"
                  href="#"
                >
                  <i class="fa-solid fa-bookmark"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 mb-30 mt-30">
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onchange="if
                            (!window.__cfRLUnblockHandlers) return false;
                            javascript:handleSelect(this)"
                data-cf-modified-60063e96678437510989fb24-=""
              >
                <option selected disabled>
                  Chapter 00
                </option>
                <option value="../chapter/chapter01">
                  Chapter 1 - The Beginning of Everything{" "}
                </option>
                <option value="../chapter/chapter02">
                  Chapter 2 - Friends and Relatives{" "}
                </option>
                <option value="../chapter/chapter03">
                  Chapter 3 - First Visit to the All-Girls School{" "}
                </option>
                <option value="../chapter/chapter04">
                  Chapter 4 - A Surprise While Out Strolling{" "}
                </option>
                <option value="../chapter/chapter05">
                  Chapter 5 - Appropriate Countermeasures{" "}
                </option>
                <option value="../chapter/chapter06">
                  Chapter 6 - First Day of School{" "}
                </option>
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
                  <li
                    class="d-flex flex-wrap watch
                                    justify-content-end"
                  >
                    <a href="../chapter/chapter01.html">
                      Next <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <img
                class="w-100 img-fluid
                            align-items-center"
                src="https://yae.hifive03.com/assets/img/chapter/chapter00/1.jpg"
                alt=""
              />
            </div>
            <div class="col-12">
              <img
                class="w-100 img-fluid
                            align-items-center"
                src="https://yae.hifive03.com/assets/img/chapter/chapter00/2.jpg"
                alt=""
              />
            </div>
            <div class="col-12">
              <img
                class="w-100 img-fluid
                            align-items-center"
                src="https://yae.hifive03.com/assets/img/chapter/chapter00/3.jpg"
                alt=""
              />
            </div>
            <div class="col-12">
              <img
                class="w-100 img-fluid
                            align-items-center"
                src="https://yae.hifive03.com/assets/img/chapter/chapter00/4.jpg"
                alt=""
              />
            </div>
            <div class="col-12">
              <img
                class="w-100 img-fluid
                            align-items-center"
                src="https://yae.hifive03.com/assets/img/chapter/chapter00/5.jpg"
                alt=""
              />
            </div>
            <div class="col-12">
              <img
                class="w-100 img-fluid
                            align-items-center"
                src="https://yae.hifive03.com/assets/img/chapter/chapter00/6.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 mb-30 mt-30">
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onchange="if
                            (!window.__cfRLUnblockHandlers) return false;
                            javascript:handleSelect(this)"
                data-cf-modified-60063e96678437510989fb24-=""
              >
                <option selected disabled>
                  Chapter 00
                </option>
                <option value="../chapter/chapter01">
                  Chapter 1 - The Beginning of Everything{" "}
                </option>
                <option value="../chapter/chapter02">
                  Chapter 2 - Friends and Relatives{" "}
                </option>
                <option value="../chapter/chapter03">
                  Chapter 3 - First Visit to the All-Girls School{" "}
                </option>
                <option value="../chapter/chapter04">
                  Chapter 4 - A Surprise While Out Strolling{" "}
                </option>
                <option value="../chapter/chapter05">
                  Chapter 5 - Appropriate Countermeasures{" "}
                </option>
                <option value="../chapter/chapter06">
                  Chapter 6 - First Day of School{" "}
                </option>
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
                  <li
                    class="d-flex flex-wrap watch
                                    justify-content-end"
                  >
                    <a href="../chapter/chapter01.html">
                      Next <i class="fa-solid fa-arrow-right"></i>
                    </a>
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
                <img
                  src="https://yae.hifive03.com/assets/img/collection/news_card.jpg"
                  alt=""
                />
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
                      class="button button-contactForm btn_1 boxed-btn"
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

export default Chapter;
