export class UrlItem {  
  id: number;
  hits: number;
  originalUrl: string = "";
  shortUrl: string = "";

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
