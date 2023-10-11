import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Mission } from '../common/mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {



  getMission(theMissionId: number): Observable<Mission> {
    // need to build URL based on yokai id
    const missionUrl = `${this.baseUrl}/${theMissionId}`;

    return this.httpClient.get<Mission>(missionUrl);
  }


  private baseUrl = 'http://localhost:8080/api/missions';

  constructor(private httpClient: HttpClient) { }

  getMissionList(): Observable<Mission[]> {
    return this.httpClient.get<GetResponseMissions>(this.baseUrl).pipe(
      map(response => response._embedded.missions)
    );
  }

  searchMissions(chapter: string): Observable<Mission[]> {

    const searchUrl = `${this.baseUrl}/search/findByChapterContaining?chapter=${chapter}`;

    return this.httpClient.get<GetResponseMissions>(searchUrl).pipe(
      map(response => response._embedded.missions)
    );
  }

}

interface GetResponseMissions {
  _embedded: {
    missions: Mission[];
  }
}
