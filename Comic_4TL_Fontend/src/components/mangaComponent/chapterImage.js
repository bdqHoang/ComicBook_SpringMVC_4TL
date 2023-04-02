import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ChapterServices from "../../services/chapterServices";
import ListChappter from "../../page/Manga/ListChapter";
import ChapterImangeServices from "../../services/ChapterImageServices";
import Imagetemplate from "../templateBook/imageTemplate";

export default function ChapterImage(props) {
  const { search } = useLocation();
  let id = new URLSearchParams(search).get("id");
  const [chapter, setChapter] = useState([]);
  const [chapterImage, setChapterImage] = useState([]);
  let chapterServices = new ChapterServices();
  let ChapterImageServices = new ChapterImangeServices();

  useEffect(() => {
    chapterServices.getChapter(id).then((res) => {
      setChapter(res.data);
    });

    ChapterImageServices.getChapterImageByChapterId(id).then((res) => {
      setChapterImage(res.data);
    });
  }, []);

  //get chappter manga
  let listChapterImage = [];
  for (var i in chapterImage) {
    listChapterImage.push(<Imagetemplate props={chapterImage[i]} />);
  }
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
          <div class="row">{listChapterImage}</div>
        </div>
      </section>
    </>
  );
}