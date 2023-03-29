import React, { useEffect, useState } from "react";
import HomeServices from "../../services/HomeServices";

export const GenreItem = (props) => {
    return(
        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-2">
            <div className="genres-box m-auto"> <img className="w-100 img-fluid"
                src={props.props.manga.avatar} alt="" style={{maxWidth:"169px", maxHeight:"169px"}} />
                <div className="genres-overlay"> <a href="manga_single_page.html">
                    <h6>{props.props.manga.name}</h6>
                </a> </div>
            </div>
        </div>
    )
}

export const GenreHomeBack = (props) => {
    let mangaItem = [];
    for(var i in props.props.listManga){
        mangaItem.push(<GenreItem props={props.props.listManga[i]}></GenreItem>)
    }
    return(
        <section id="genres" className="pt-50 pb-20">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-tittle mb-30">
                        <h3>{props.props.name}</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-2 col-6 col-sm-4
                        col-md-3 mb-2">
                            <div className="genres-box romance m-auto"> <a href="genres.html">
                                    <h4>{props.props.name}</h4>
                                </a> 
                            </div>
                        </div>
                        {mangaItem}
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export function GenreHome(){
    var homeServices = new HomeServices();

    let [genre, setGenre] = useState([]);
    useEffect(()=>{
        homeServices.getHomeGenre().then((res)=>{
            setGenre(res.data);
        })
    },[])
    console.log(genre);
    let genreHome = [];
    for(var i in genre){
        genreHome.push(<GenreHomeBack props={genre[i]}></GenreHomeBack>)
    }
    return(
        <>{genreHome}</>
    )
}