import React from "react";
import moment from "moment";

export default function ListChappter(props) {
  return(
    <li>
        <a href={"/getchapter?id="+props.props.chapter_id} className="d-flex flex-wrap
                    justify-content-between">
            <span>{props.props.name}</span><span>{moment(new Date(props.props.release_day).toLocaleDateString(), 'MM/DD/YYYY').format('DD/MM/YYYY')}
            </span>
        </a>
    </li>
  )
}
