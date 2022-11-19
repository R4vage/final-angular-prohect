import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { SearchPageComponent } from './search-page.component';
import { resultsMockData, SearchStoreSelectorsMock, searchStoreMock, mockedSearchResult } from 'src/Test-utilities/results-mock-data';
import { HarnessLoader } from '@angular/cdk/testing';
import { DebugElement } from '@angular/core';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import * as fromSearchActions from './search-store/search.selectors'

import { DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { Search, SearchState } from './search-store/search.reducer';
import { SearchResults } from '../core/models/rest.models';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let loader: HarnessLoader;
  let searchValue = 'mockValue';
  let store: MockStore;
  let debug: DebugElement;
  let mockSelectSearchByValue: MemoizedSelector<SearchState, Search[]>;

  beforeEach(async () => {  


    await TestBed.configureTestingModule({

      declarations: [ SearchPageComponent ],
      providers:[
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({value: searchValue}),
          }
        },
        provideMockStore(/* {
          initialState: resultsMockData,
          selectors: SearchStoreSelectorsMock
        } */)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPageComponent);
    store = TestBed.inject(MockStore);
  /*   mockSelectSearchByValue = store.overrideSelector(fromSearchActions.selectSearchByValue, mockedSearchResult); */

    loader = TestbedHarnessEnvironment.loader(fixture);
    debug = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    store.select(fromSearchActions.selectSearchByValue('valueMock')).subscribe(next => {})
  });
});
