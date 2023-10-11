import { Yokai } from './../common/yokai';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class YokaiService {

  private baseUrl = 'http://localhost:8080/api/yokais';

  constructor(private httpClient: HttpClient) { }

  getYokaiList(): Observable<Yokai[]> {
    return this.httpClient.get<GetResponseYokais>(this.baseUrl).pipe(
      map(response => response._embedded.yokais)
    );
  }

  getYokai(theYokaiId: number): Observable<Yokai> {
    
    // need to build URL based on yokai id
    const yokaiUrl = `${this.baseUrl}/${theYokaiId}`;

    return this.httpClient.get<Yokai>(yokaiUrl);
  }

  searchYokais(theKeyword: string): Observable<Yokai[]> {

    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.httpClient.get<GetResponseYokais>(`${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`).pipe(
      map(response => response._embedded.yokais)
    );
  }

  SearchYokaisPaginate(thePage: number,
                       thePageSize: number,
                       theKeyword: string): Observable<GetResponseYokais> {


    const searchPageUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}&page=${thePage}&size=${thePageSize}`;    

    return this.httpClient.get<GetResponseYokais>(searchPageUrl);
}

  getYokaiListPaginate(thePage: number,
                       thePageSize: number,): Observable<GetResponseYokais> {

    const pageUrl = `${this.baseUrl}?page=${thePage}&size=${thePageSize}`;    

    return this.httpClient.get<GetResponseYokais>(pageUrl);
  }



}

interface GetResponseYokais {
  _embedded: {
    yokais: Yokai[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
