import React from "react";

export default function ListChapterTemplate(props) {  
  return (
    <option value={props.props.chapter_id}>
      {props.props.name}
    </option>
  );
}
