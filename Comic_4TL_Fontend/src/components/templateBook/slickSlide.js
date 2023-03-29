import React from "react";
import Helper from "../homeComponent/helper/helper";

const SlideSlick = (props) => {

    let helper = new Helper();
    
    var ratting;

    ratting = helper.ratting(props.props.ratting);

    var genre;

    genre = helper.genre(props.props.listGenre);

    return(
        <div className="col-lg-4">
            <a href="manga_single_page.html">
                <div className="single-bottom mb-35">
                    <div className="trend-bottom-img
                        mb-30">
                        <img className="play"
                            src={props.props.avatar}
                            alt=""/>
                        <div className="overlay_play">
                            <i className="fa-solid
                                fa-heart">{props.props.views}</i>
                        </div>
                    </div>
                    <div className="trend-bottom-cap">
                        <h4>{props.props.name}</h4>
                        <ul className="d-flex flex-wrap
                            star">
                            <li>{ratting}</li>
                        </ul>
                        <div className="tag2 d-flex
                            flex-wrap">
                            <h6>Genre:</h6>
                            <ul className="d-flex
                                flex-wrap">
                                {genre}
                            </ul>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default SlideSlick;