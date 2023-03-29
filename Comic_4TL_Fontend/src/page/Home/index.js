import React, {useState, useEffect } from "react";
import NewSeason from "../../components/homeComponent/newSeason";
import HomeServices from "../../services/HomeServices";
import LastedManga from "../../components/homeComponent/lastedManga";

function Index(props) {
   

      const [state, setState] = useState([]);

      let homeServices = new HomeServices();

      useEffect(() => {
        homeServices.getNewSeason().then((res) => {
            setState(res.data);
        })
      }, []);
      
      props = state;

      
    return (
        < >
            <NewSeason props={props} />

            <LastedManga/>

            <section id="genres" className="pt-50 pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-tittle mb-30">
                                <h3>GENRES</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-2 col-6 col-sm-4
                                col-md-3 mb-2">
                                    <div className="genres-box romance
                                    m-auto"> <a href="genres.html">
                                            <h4>Romance</h4>
                                            <p>Beauty, romance, love: Things we live
                                                for.</p>
                                        </a> </div>
                                </div>
                                <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-2">
                                    <div className="genres-box m-auto"> <img className="w-100 img-fluid"
                                        src="https://yae.hifive03.com/assets/img/genres/1.jpg" alt="" />
                                        <div className="genres-overlay"> <a href="manga_single_page.html">
                                            <h6>Am
                                                I Invincible</h6>
                                        </a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-2">
                                    <div className="genres-box supernatural m-auto"> <a href="genres.html">
                                        <h4>Supernatural</h4>
                                        <p>Witches, werewolves, and cryptids. Oh
                                            my!</p>
                                    </a> </div>
                                </div>
                                <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-2">
                                    <div className="genres-box m-auto"> <img className="w-100 img-fluid"
                                        src="https://yae.hifive03.com/assets/img/genres/22.jpg" alt="" />
                                        <div className="genres-overlay"> <a href="manga_single_page.html">
                                            <h6>Saikyou
                                                no Shuzoku ga Ningen Datta Ken
                                            </h6>
                                        </a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-2">
                                    <div className="genres-box fantasy m-auto"> <a href="genres.html">
                                        <h4>Fantasy</h4>
                                        <p>
                                            Immerse, Imagine, and Inspire.</p>
                                    </a> </div>
                                </div>
                                <div className="col-lg-2
                                col-6 col-sm-4 col-md-3 mb-2">
                                    <div className="genres-box m-auto"> <img className="w-100
                                        img-fluid" src="https://yae.hifive03.com/assets/img/genres/17.jpg" alt="" />
                                        <div className="genres-overlay"> <a href="manga_single_page.html">
                                            <h6>He
                                                Didn’t Want to Be the Center of
                                                .. </h6>
                                        </a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-2">
                                    <div className="genres-box drama m-auto"> <a href="genres.html">
                                        <h4>DRAMA</h4>
                                        <p>
                                            Your daily strip of drama. </p>
                                    </a>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-6
                                col-sm-4 col-md-3 mb-2">
                                    <div className="genres-box
                                    m-auto"> <img className="w-100 img-fluid"
                                            src="https://yae.hifive03.com/assets/img/genres/7.jpg" alt="" />
                                        <div className="genres-overlay"> <a href="manga_single_page.html">
                                            <h6>I
                                                Have An Apocalyptic Dungeon
                                            </h6>
                                        </a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-2 col-6 col-sm-4
                                col-md-3 mb-2">
                                    <div className="genres-box harem
                                    m-auto"> <a href="genres.html">
                                            <h4>harem</h4>
                                            <p>Beauty, romance, love: Things we live
                                                for.</p>
                                        </a> </div>
                                </div>
                                <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-2">
                                    <div className="genres-box m-auto"> <img className="w-100 img-fluid"
                                        src="https://yae.hifive03.com/assets/img/genres/12.jpg" alt="" />
                                        <div className="genres-overlay"> <a href="manga_single_page.html">
                                            <h6>Douyara
                                                Boku No Hanayome Wa Onna.. </h6>
                                        </a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Index;