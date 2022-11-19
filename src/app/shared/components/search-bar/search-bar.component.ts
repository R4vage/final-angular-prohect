import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  debounceTime,
  distinct,
  distinctUntilChanged,
  filter,
  fromEvent,
  Subscription,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription$!: Subscription;
  inputControl = new FormControl('')
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.subscription$ = this.inputControl.valueChanges
      .pipe(debounceTime(700), distinctUntilChanged())
      .subscribe((inputValue) => {
        if (inputValue){
        let value = inputValue.trim().toLowerCase();
        this.sendToSearchPage(value);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  sendToSearchPage(value: string): void {
    this.router.navigate([`/search/${value}`]);
  }
}
