import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { SearchResults } from '../core/models/rest.models';
import { SearchState } from './search-store/search.reducer';
import { selectSearchByValue } from './search-store/search.selectors';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  searchResults$!:Observable<SearchResults | undefined>;
  searchValue!:string;
  constructor(private route: ActivatedRoute, private store: Store<SearchState>) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.searchValue = params['value'];
        this.searchResults$ = this.store.select(selectSearchByValue(this.searchValue)).pipe(
          map(result => result?.results)
        );
      } 
    });
  }
}
