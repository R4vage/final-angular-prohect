import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResults } from 'src/app/core/models/rest.models';

@Injectable({
  providedIn: 'root'
})
export class SearchRestService {

  constructor (private http: HttpClient) { }

  searchItem (value:string): Observable<SearchResults> {
    return this.http.get<SearchResults>(`https://api.spotify.com/v1/search?q=${value}&type=track%2Cartist%2Calbum%2Cplaylist&limit=10`)
  }
}
