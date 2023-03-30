import React from "react";
import { GenreHome } from "../../components/genreComponent/genreItem";

function Genre() {
    return (
        <>
        <section id="breadcrumb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a
                                        href="index.html">Home</a></li>
                                <li class="breadcrumb-item active"
                                    aria-current="page">Genres</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <GenreHome/>

        </>
    )
}

export default Genre;