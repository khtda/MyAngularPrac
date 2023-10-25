import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash-es';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  // 若使用rxjs
  // private searchTerms = new Subject<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    // 若使用rxjs
    // this.searchTerms.pipe(debounceTime(500)).subscribe(searchText => {
    //   this.doSearch(searchText);
    //   const time = new Date();
    //   console.log(time);
    // });
  }

  doSearch(value: string) {
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }

  handleSearchDebounced = _.debounce((value: string) => {
    this.doSearch(value);
    const time = new Date();
    console.log(time);
  }, 500);

  searchDebounced(value: string) {
    this.handleSearchDebounced(value);
  }

  // 若使用rxjs
  // searchDebounced2(value: string) {
  //   this.searchTerms.next(value);
  // }
}
