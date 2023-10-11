import { YokaiService } from './../../services/yokai.service';
import { Component, OnInit } from '@angular/core';
import { Yokai } from 'src/app/common/yokai';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-yokai-list',
  templateUrl: './yokai-list.component.html',
  styleUrls: ['./yokai-list.component.css']
})
export class YokaiListComponent implements OnInit {

  yokais: Yokai[] = [];
  searchMode: boolean = false;

  thePageNumber: number = 1;
  thePageSize: number = 12;
  theTotalElements: number = 72;

  previousKeyWord: string = "";

  constructor(private yokaiService: YokaiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.listYokais();
    });
    
  }

  listYokais() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchYokais();
    }
    else {
      this.handleListYokais();
    }

  }

  handleSearchYokais() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    if (this.previousKeyWord != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyWord = theKeyword;

    this.yokaiService.SearchYokaisPaginate(this.thePageNumber - 1,
                                           this.thePageSize,
                                           theKeyword).subscribe(this.processResult());
  }

  handleListYokais() {

    this.yokaiService.getYokaiListPaginate(this.thePageNumber - 1,
                                           this.thePageSize).subscribe(
    (data:any) => {
        this.yokais = data._embedded.yokais;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
      }
    )
  }

  updatePageSize(pageSize: string){

    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listYokais();

  }

  processResult() {
    return (data:any) => {
      this.yokais = data._embedded.yokais;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }
}
