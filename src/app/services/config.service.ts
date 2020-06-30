import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BookDetails } from '../classess/book-details';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getConfig(searchQuery: BookDetails): Observable<any> {
    const configUrl = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=" + searchQuery.title+"+inauthor:"+searchQuery.author+"+inpublisher:"+searchQuery.publisher+"&orderBy=relevance&projection=lite";

    return this.http.get<any>(configUrl);
  }

}
