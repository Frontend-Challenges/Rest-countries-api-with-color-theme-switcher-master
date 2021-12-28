export class Helper {
  urlParams;

  constructor() {
    this.urlParams = new URLSearchParams(window.location.search);
  }

  getParamUrl(param) {
    return this.urlParams.get(param);
  }
}
