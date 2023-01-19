import {
  RadioBrowserApi as RadioBrowserApiSuper
} from 'radio-browser-api';
import https from 'https';
import axios from 'axios';

type Server = {
  ip: string,
  name: string
};

class RadioBrowserApi extends RadioBrowserApiSuper {
  constructor(appName: string, hideBroken = true) {
    super(appName, hideBroken);
  }

  // temporary fix for https cert error when in frontend hardcode the server
  // https://github.com/segler-alex/radiobrowser-api-rust/issues/122
  async resolveBaseUrl(config: RequestInit = {}): Promise<Server[]> {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    const SERVER_LIST_URL = 'https://all.api.radio-browser.info/json/servers';

    return axios(SERVER_LIST_URL, { httpsAgent })
      .then(response => response.status === 200 ? response.data : Promise.reject(response.status))
      .then(list => list as Server[])
  }
}

export default RadioBrowserApi;