import { Component, OnInit } from '@angular/core';
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
  mostPopularProjects = [];

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
      //console.log(response);
    }, error => {
      console.log(error);
    });

    // const urlToGetAllProjects = 'http://localhost:8000/project/';
    // let responseData = [];
    // axios.get(urlToGetAllProjects)
    //   .then(response => {
    //     this.projects = response.data;
    //     console.log(this.projects);
    //     let i
    //     for (i in this.projects) {
    //       //console.log(this.projects[i]);
    //       for (let k in this.projects) {
    //         k = parseInt(k) + parseInt(i);
    //         console.log(this.projects.length)
    //         console.log(this.projects[k]);
    //         if (parseInt(k) === this.projects.length - 1) {
    //           break;
    //         }
    //       }
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });


  }
}
