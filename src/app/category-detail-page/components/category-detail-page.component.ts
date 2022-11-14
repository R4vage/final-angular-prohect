import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CategoryItem } from 'src/app/core/models/categories.models';
import { CategoryState } from 'src/app/main-page/main-page-store/reducers/category.reducer';
import { selectCategoryById } from 'src/app/main-page/main-page-store/selectors/category.selectors';

@Component({
  selector: 'app-category-detail-page',
  templateUrl: './category-detail-page.component.html',
  styleUrls: ['./category-detail-page.component.scss'],
})
export class CategoryDetailPageComponent implements OnInit {
  category$!: Observable<CategoryItem | undefined>;
  subscription!: Subscription;

  idCategory!: string;

  isCategorySaved = true;
  isCategoryNotSaved = true;

  constructor(private store: Store<CategoryState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe({
      next: (params) => {
        this.idCategory = params['id'];
        this.category$ = this.store.pipe(select(selectCategoryById(this.idCategory)));
      },
    });
  }

  getImage(category: CategoryItem) {
    return category.icons[0].url;
  }
}
