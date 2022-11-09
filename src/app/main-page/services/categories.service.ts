import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MainCategoriesResponse } from 'src/app/core/models/categories.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly URL = 'https://api.spotify.com/v1';

  getAvailableCategories(limit = 20, offset = 0) {
    return this.http
      .get<MainCategoriesResponse>(`${this.URL}/browse/categories`, {
        params: this.getQueryParametersAvailableCategories(),
      })
      .pipe(
        map((data) => {
          return data.categories;
        })
      );
  }

  getQueryParametersAvailableCategories(limit = 20, offset = 0) {
    if (0 <= limit && limit <= 50 && offset >= 0) {
      return new HttpParams().appendAll({
        'Content-Type': 'application/json',
        limit,
        offset,
      });
    }
    if (!environment.production) {
      console.warn('The limit is between 0 and 50, check if it is in this range');
      console.warn('now it is going to use default values instead');
    }

    return new HttpParams().appendAll({
      limit: 20,
      offset: 0,
    });
  }

  constructor(private http: HttpClient) {}
}
