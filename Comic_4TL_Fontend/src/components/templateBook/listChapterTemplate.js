import React from "react";

export default function listChapterTemplate(props) {
    console.log(props.props);
  return (
    <option value="../chapter/chapter01">
      {props.props.name}
    </option>
  );
}
