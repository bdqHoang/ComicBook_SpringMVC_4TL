import React from "react";
import Helper from "../homeComponent/helper/helper";

const RecentRelease = (props) => {

    let helper = new Helper();
    
    var ratting;

    ratting = helper.ratting(props.props.ratting);
    var genre;

    genre = helper.genre(props.props.listGenre);
    return(
        <>
        <a href="manga_single_page.html">
            <div className="trand-right-single d-flex">
                <div className="trand-right-img">
                    <img className="play" style={{maxWidth:"120px", maxHeight:"120px"}} src={props.props.avatar} alt="" />
                    <div className="overlay_play2">
                        <i className="fa-solid fa-heart"> 61M</i>
                    </div>
                </div>
                <div className="trand-right-cap">
                    <h4>{props.props.name}</h4>
                    <ul className="d-flex flex-wrap star">
                       {ratting}
                    </ul>
                    <div className="tag2 d-flex flex-wrap">
                        <h6>Genre:</h6>
                        <ul className="d-flex flex-wrap">
                           {genre}
                        </ul>
                    </div>
                </div>
            </div>
        </a>
        </>

    )
}

export default RecentRelease;
