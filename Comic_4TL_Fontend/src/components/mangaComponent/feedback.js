import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MangaSinglePageServices from "../../services/mangaSinglePageServices";
import ListChappter from "../../page/Manga/ListChapter";
import FeedbackTemplate from "../../components/templateBook/feedbackTemplate";
import FeedbackServices from "../../services/FeedbackServices";

export default function Feedback(props) {
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
      <section id="commentbox">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-8">
              <div class="comment_area mb-50 clearfix">
                <h5 class="title">{Countfeedback} Comments</h5>
                <ol>{listFeedback}</ol>
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
                      class="button
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