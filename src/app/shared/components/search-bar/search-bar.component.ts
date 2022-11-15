import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  sendToSearchPage(value:string):void {
    if (value.length !== 0){
      let searchValue = value.trim().toLowerCase()
      this.router.navigate([`/search/${searchValue}`])
    }
  }
}
