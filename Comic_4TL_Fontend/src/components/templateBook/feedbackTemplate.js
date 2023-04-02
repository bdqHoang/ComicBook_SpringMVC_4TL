import React from "react";
import moment from "moment";

export default function FeedbackTemplate(props) {
  console.log(props.props);
  return (
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
          <a href="/home/new-season" class="post-date">
            {moment(
              new Date(props.props.create_at).toLocaleDateString(),
              "MM/DD/YYYY"
            ).format("DD/MM/YYYY")}
          </a>
          <h5>Son Van Hieu</h5>
          <p>{props.props.comment}</p>
        </div>
      </div>
    </li>
  );
}
