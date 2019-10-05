import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import axios from 'axios';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import {DbServiceService} from '../db-service.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  projects = [];

  constructor(private dbService: DbServiceService) {

  }

  ngOnInit() {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });

    this.dbService.getAllProjects().subscribe(response => {
      this.projects = response.data;
    }, error => {
      console.log(error);
    });

  }

  putLike(projectName, likes) {
    this.dbService.putNewLike(projectName, likes).subscribe(response => {
      console.log(response.status);
      if (response.status === 200) {
        for (var project of this.projects) {
          if (project.projectName === projectName) {
            project.likes++;
          }
        }
      } else {
        alert('Cannot process');
      }
    });
  }
}
