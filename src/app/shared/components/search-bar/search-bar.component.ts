import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('search', { static: true }) input!: ElementRef;
  subscription$!: Subscription;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.subscription$ = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(filter(Boolean), debounceTime(1000), distinctUntilChanged())
      .subscribe(() => {
        let value = this.input.nativeElement.value.trim().toLowerCase();
        if (value !== '') {
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
