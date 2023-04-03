import React from "react";

export default function Imagetemplate(props) {
  return (
    <div class="col-12">
      <img
        class="w-100 img-fluid align-items-center"
        src={props.props.imgSrc}
        alt={props.props.imgChaId}
      />
    </div>
  );
}
