import axios from "axios";

class ServerApi {
  constructor() {}
  async getRender() {
    return await axios.get("/render");
  }
}
export default new ServerApi();
