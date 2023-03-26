import api from "./api";
class HomeServices{

    // Get all comics new season
    getNewSeason(){
        return api.get("/home/new-season");
    }


    // Get all comics recent release
    getRecentRelease(){
        return api.get("/home/recent");
    }


}

export default HomeServices;