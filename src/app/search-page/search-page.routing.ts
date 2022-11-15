import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResolver } from './resolver/search.resolver';
import { SearchPageComponent } from './search-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
    resolve: {
        search: SearchResolver
    },
    runGuardsAndResolvers: 'always'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
