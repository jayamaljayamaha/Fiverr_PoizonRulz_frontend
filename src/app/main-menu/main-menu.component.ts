import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  projects = [];

  ngOnInit() {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });

    this.apiService.getAllProjects().subscribe(data => {
      this.projects = data;
    }, error => {
      console.log(error);
    });

    // this.apiService.putNewLike().subscribe(data => {
    //   console.log(data);
    // });
  }

  addLike(project) {
    console.log(project);
    this.apiService.putNewLike(project._id, project.score_comment_react).subscribe(data => {
      console.log(data);
    });
    project.score_comment_react = project.score_comment_react + 1;
  }
}
