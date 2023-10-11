import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mission } from 'src/app/common/mission';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {

  missions: Mission[] = [];

  searchMode: boolean = false;

  constructor(private missionService: MissionService,
              private route: ActivatedRoute,
              private router: Router) { }



  ngOnInit(): void {
    document.body.className = "ybgselector";

    this.route.paramMap.subscribe(() => {
      this.listMissions();
    });

    //this.listMissions();
  }

  // listMissions() {
  //   this.missionService.getMissionList().subscribe(
  //     data => {
  //       this.missions = data;
  //     }
  //   )
  // }

  listMissions() {

    this.searchMode = this.route.snapshot.paramMap.has('chapter');

    if (this.searchMode) {
      this.handleSearchMissions();
    }
    else {
      this.handleListMissions();
    }

  }

  handleSearchMissions() {
    const chapter: string = this.route.snapshot.paramMap.get('chapter')!;

    // now search for the products using keyword
    this.missionService.searchMissions(chapter).subscribe(
      data => {
        this.missions = data;
      }
    )
  }

  handleListMissions() {
    this.missionService.getMissionList().subscribe(
      data => {
        this.missions = data;
      }
    )
  }

  chapterSearch(chapter:string) {
    console.log(`Hello ${chapter}`);
    this.router.navigateByUrl(`missions/chp/${chapter}`);
  }

}
