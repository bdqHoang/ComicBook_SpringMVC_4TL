import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Imagetemplate from "../templateBook/imageTemplate";
import ChapterImangeServices from "../../services/ChapterImageServices";


export default function listChapterTemplate(props) {
  const [chapterImage, setChapterImage] = useState([]);
  const [clicked, setClicked] = useState(false);

  var chapterImgService = new ChapterImangeServices();

  const handleClick = () => {
    setClicked(true);
    ReactDOM.createRoot(document.getElementById("imgChapter")).render(
      <React.StrictMode>
        {listChapterImage}
      </React.StrictMode>
    );
  };
   //get chappter manga

   let listChapterImage = [];
   for (var i in chapterImage) {
     listChapterImage.push(<Imagetemplate props={chapterImage[i]} />);
   }
 
   
   useEffect(()=>{
     chapterImgService.getChapterImageByChapterId(props.props.id).then((res) => {
       setChapterImage(res.data);
     });
   },[clicked]);

  return (
    <option value={props.props.name} onClick={handleClick}>
      {props.props.name}
    </option>
  );
}
