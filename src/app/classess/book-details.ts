export class BookDetails {
  title: string;
  author: string;
  publisher: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
