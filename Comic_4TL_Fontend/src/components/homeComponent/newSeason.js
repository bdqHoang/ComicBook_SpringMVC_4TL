import React from "react";
import SlideSlick from "../templateBook/slickSlide";


function NewSeason(props) {
    return (
        <>
<section className="trending-area fix">
            <div className="container">
                <div className="trending-main">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="acme-news-ticker">
                                <div className="acme-news-ticker-label">Update News</div>
                                <div className="acme-news-ticker-box">
                                    <ul className="my-news-ticker">
                                        <li><a href="#"><span>Latest News:</span>
                                                Episode 12 of Spy
                                                x Family is scheduled to release
                                                worldwide on Saturday, June
                                                25th, 2022. The
                                                episode will be available to
                                                stream on Crunchyroll and
                                                Netflix at 8:30 AM
                                                PDT (Pacific Timing); however,
                                                the release time will vary
                                                depending on your
                                                region.</a></li>
                                        <li><a href="#"><span>Latest News:</span>
                                                Overlord Season 5
                                                has yet to get confirmed in
                                                2022. There is no release date
                                                for the fifth
                                                season of this anime series.</a></li>
                                        <li><a href="#"><span>Latest News:</span>
                                                The latest episode
                                                is packed with new information
                                                regarding the Demon Realm.
                                                However, more
                                                mysteries unfold as well. Who
                                                exactly is Amane? Here are all
                                                the details
                                                needed for The Devil is a
                                                Part-Timer Season 2 Episode 7.</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">

                            <div className="trending-top mb-30">
                                <div className="trend-top-img">
                                    <img
                                        src="https://yae.hifive03.com/assets/img/manga_banner/banner1.jpg"
                                        alt=""/>
                                    <div className="trend-top-cap">
                                        <span>Fantasy</span>
                                        <h2><a href="manga_single_page.html">Twilight
                                                Poem</a></h2>
                                        <p>Kim Suji , MIDNIGHT STUDIO</p>
                                    </div>
                                </div>
                            </div>

                            <div className="trending-bottom">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-tittle mb-30">
                                            <h3>NEW SEASON</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row trending-bottom-slider">
                                    <SlideSlick></SlideSlick>
                                    <SlideSlick></SlideSlick>
                                    <SlideSlick></SlideSlick>
                                    <SlideSlick></SlideSlick>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="section-tittle mb-30">
                                <h3>RECENT RELEASE</h3>
                            </div>
                            



                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}

export default NewSeason;