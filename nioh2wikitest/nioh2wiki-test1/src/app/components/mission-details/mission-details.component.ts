import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from 'src/app/common/mission';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {

  mission!: Mission

  constructor(private missionService: MissionService,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.paramMap.subscribe(() => {
        this.handleMissionDetails();
      });
    }

  handleMissionDetails() {
    // get the id param string. convert to number
    const theMissionId: number = +this.route.snapshot.paramMap.get('id')!;

    this.missionService.getMission(theMissionId).subscribe(
      data => {
        this.mission = data;
      }
    )
  }

}
