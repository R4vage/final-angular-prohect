import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs';
import { MainCategoriesResponse, CategoryItem } from 'src/app/core/models/categories.models';
import { Playlists } from 'src/app/core/models/playlist.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  readonly URL = 'https://api.spotify.com/v1';

  getCategoryPlaylists(categoryId: string, limit = 20, offset = 0) {
    return this.http.get<CategoryItem>(`${this.URL}/browse/categories/${categoryId}`).pipe(
      switchMap((categoryItem) => {
        return this.http
          .get<{ playlists: Playlists }>(`${this.URL}/browse/categories/${categoryId}/playlists`, { params: this.getQueryParametersAvailableCategories(limit, offset) })
          .pipe(
            map((playlists) => {
              return { ...categoryItem, ...playlists };
            })
          );
      })
    );
  }

  getAvailableCategories(limit = 20, offset = 0) {
    return this.http
      .get<MainCategoriesResponse>(`${this.URL}/browse/categories`, {
        params: this.getQueryParametersAvailableCategories(limit, offset),
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
