import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookDetails } from '../classess/book-details';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getConfig(searchQuery: BookDetails): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain'});
    const configUrl = "?q=" + searchQuery.title+"+inauthor:"+searchQuery.author+"+inpublisher:"+searchQuery.publisher+"&orderBy=relevance&projection=lite";

    return this.http.get(configUrl, {responseType: 'text', headers});
  }

}
