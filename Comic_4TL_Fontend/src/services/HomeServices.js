import api from "./api";
class HomeServices{

    // Get all comics new season
    getNewSeason(){
        return api.get("/new-season");
    }


    // Get all comics recent release
    getRecentRelease(){
        return api.get("/recent");
    }


}

export default HomeServices;