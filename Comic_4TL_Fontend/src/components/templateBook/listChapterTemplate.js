import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Imagetemplate from "../templateBook/imageTemplate";


export default function listChapterTemplate(props) {
  console.log(props.props);

  const [chapterImage, setChapterImage] = useState([]);
  const [clicked, setClicked] = useState(false);

  //get chappter manga

  let listChapterImage = [];
  for (var i in chapterImage) {
    listChapterImage.push(<Imagetemplate props={chapterImage[i]} />);
  }


  const handleClick = () => {
    ReactDOM.createRoot().render(
      <React.StrictMode>

      </React.StrictMode>
    );
  };

  return (
    <option value={props.props.name} onClick={handleClick}>
      {props.props.name}
    </option>
  );
}
