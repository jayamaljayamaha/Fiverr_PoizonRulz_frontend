import {Component, OnInit} from '@angular/core';
import {DbServiceService} from '../db-service.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  projects = [];
  mostPopularProjects = [];

  constructor(private dbService: DbServiceService) {
  }

  ngOnInit() {

    this.dbService.getAllProjects().subscribe(response => {
        this.projects = response.data;
        while (!this.sort(this.projects)) {

          for (let i = 0; i < this.projects.length-1; i++) {
            if (this.projects[i].likes < this.projects[i + 1].likes) {
              var temp = this.projects[i];
              this.projects[i] = this.projects[i + 1];
              this.projects[i + 1] = temp;
            }
          }
        }
        this.mostPopularProjects = this.projects;
        console.log(this.mostPopularProjects);
      }
      ,
      error => {
        console.log(error);
      }
    );

  }

  sort(projects) {
    for (let k = 0; k < projects.length - 1; k++) {
      if (projects[k].likes < projects[k + 1].likes) {
        return false;
      }
    }
    return true;
  }

}
