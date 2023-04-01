import React from "react";

export default function RelatedManga(props) {
    return (
        <a href="#">
        <div className="trand-right-single d-flex">
            <div className="trand-right-img">
                <img className="play" src="assets/img/manga/small8.jpg" alt="" />
                <div className="overlay_play2">
                    <i className="fa-solid fa-heart"> 61M</i>
                </div>
            </div>
            <div className="trand-right-cap">
                <h4>My Aunt </h4>
                <ul className="d-flex flex-wrap star">
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                </ul>
                <div className="tag2 d-flex flex-wrap">
                    <h6>Genre:</h6>
                    <ul className="d-flex flex-wrap">
                        <li>Action,</li>
                        <li>Comedy,</li>
                        <li>Drama,</li>
                        <li>Supernatural</li>
                    </ul>
                </div>
            </div>
        </div>
    </a>
    )
}