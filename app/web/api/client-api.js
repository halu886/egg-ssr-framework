import axios from "axios";

function getClientAPI() {
  return {
    getTop: async () => {
      return await axios.get("/get/top").data;
    },
    getBottom: () => {
      return await axios.get("/get/bottom").data;
    },
    getRecommender: () => {
      return await axios.get("/get/recommender").data;
    },
    getMain: () => {
      return await axios.get("/get/main").data;
    }
  };
}
export default getClientAPI;
