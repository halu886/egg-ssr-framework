import axios from "axios";

class ClientApi {
  constructor() {}
  async getRender() {
    return await axios.get("/render");
  }
}
export default new ClientApi();
