import React from "react";

export default function Imagetemplate(props) {
    console.log(props.props);
  return (
    <div class="col-12">
      <img
        class="w-100 img-fluid align-items-center"
        src={props.props.img_src}
        alt="Chuong"
      />
    </div>
  );
}
