import {Component, OnInit} from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  projects = [];

  constructor() {

  }

  ngOnInit() {
    const urlToGetAllProjects = 'http://localhost:8000/project/';
    let responseData = [];
    axios.get(urlToGetAllProjects)
      .then(response => {
        this.projects = response.data;
        console.log(this.projects);
      })
      .catch(function(error) {
        console.log(error);
      });
    //this.projects = responseData;

  }

}
