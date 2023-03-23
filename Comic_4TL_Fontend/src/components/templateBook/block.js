import React from "react";
import Helper from "./helper/helper";

const Block = (props) => {
    let helper = new Helper();
    
    var ratting;

    ratting = helper.ratting(props.ratting);
    var genre;

    genre = helper.genre(props.genre);
    
    return (
        <div className="col-sm-6 col-6 col-md-4 col-lg-3">
    <div className="block2">
        <div className="block2-pic hov-img0"><img src={props.avatar} alt="IMG-PRODUCT" />
            <div className="overlay_play1"><i className="fa-solid fa-heart">{props.views}</i></div>
            {/* <div className="overlay_play1"><i className="fa-solid fa-heart">35M</i></div> */}
            <a href="manga_single_page.html" className="block2-btn"><i className="fa-solid fa-eye"></i></a>
        </div>
        <div className="block2-txt text-center">
            <div className="block2-txt-child1"><a className="text-uppercase" href="manga_single_page.html">{props.name}</a>
                <div className="star mb-2 d-flex flex-wrap justify-content-center">
                    {/* <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i> */}
                   {ratting}
                </div>
                <div className="tag3 d-flex flex-wrap">
                    <h6>Genre:</h6>
                    <ul className="d-flex flex-wrap">
                        {/* <li>Action,</li>
                        <li>Comedy,</li>
                        <li>Drama,</li>
                        <li>Supernatural</li> */}
                        {genre}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    )

}

export default Block;