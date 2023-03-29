import React, {useState, useEffect} from "react";
import Block from "../templateBook/block";
import Pangination from "./helper/pangination";
import HomeServices from "../../services/HomeServices";
import ReactDOM from 'react-dom/client';



export default function LastedManga(props) {
    const [data, setData] = useState([]);
    var homeServices = new HomeServices();
    useEffect(() => {
        homeServices.getPageManga().then((res) => {
            setData(res.data);
        })
    }, [])

    let pangination = [];
    for (var i = 1; i <= data; i++) {
        pangination.push(<Pangination props={i}/>);
    }
    
    return (
        <>
        <section id="manga" class="manga_filter pt-50 pb-20">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="section-tittle mb-30">
                                    <h3>LATEST MANGA</h3>
                                </div>
                            </div>
                            <div class="col-lg-9 text-end">
                                <div class="filter-button">

                                    <nav class="">
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a class="nav-item nav-link active" id="nav-Recently-tab" data-toggle="tab"
                                                href="#nav-Recently" role="tab" aria-controls="nav-Recently"
                                                aria-selected="true">Recently Updated</a>
                                        </div>
                                    </nav>

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">

                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-Recently" role="tabpanel"
                                        aria-labelledby="nav-Recently-tab">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="tab-content" id="nav-tabContent1">
                                                            <div class="tab-pane fade show active" id="nav-one-recently" role="tabpanel"
                                                                aria-labelledby="nav-one-recently-tab">
                                                                <div class="row" id="getAllManga">
                                                                    <Block/>


                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="filter-page-button">
                                                    <nav class="">
                                                        <div class="nav nav-tabs" id="nav-tab2" role="tablist">
                                                            {pangination}
                                                        </div>
                                                    </nav>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
