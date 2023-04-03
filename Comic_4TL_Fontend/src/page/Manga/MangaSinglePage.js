import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MangaSinglePageServices from "../../services/mangaSinglePageServices";
import ListChappter from "./ListChapter";
import MangaSingle from "../../components/mangaComponent/mangaSinglePage";
import Feedback from "../../components/mangaComponent/feedback";

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

  //get genre
  let listGenre,
    listGenreId = [];
  var check = ", ";
  for (var i in manga.listGenre) {
    if (i != 0)
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

  return (
    <>
      <MangaSingle />
      <Feedback />
    </>
  );
}
