import axios from "axios";

function getClientAPI() {
  return {
    fetchTop: async () => {
      return (await axios.get("/get/top")).data;
    },
    getBottom: async () => {
      return (await axios.get("/get/bottom")).data;
    },
    fetchRecommder: async () => {
      return (await axios.get("/get/recommender")).data;
    },
    getMain: async () => {
      return (await axios.get("/get/main")).data;
    }
  };
}
export default getClientAPI;
