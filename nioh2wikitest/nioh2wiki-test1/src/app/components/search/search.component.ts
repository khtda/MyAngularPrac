import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  doSearch(value: string) {
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }

  handleSearchDebounced = _.debounce((value: string) => {
   
    this.doSearch(value);
    const time = new Date();
    console.log( time );
  }, 500);

  searchDebounced(value:string){

    this.handleSearchDebounced(value);
  }

  
}
