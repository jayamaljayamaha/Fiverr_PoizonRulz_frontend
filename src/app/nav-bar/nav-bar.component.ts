import {Component, OnInit} from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  enteredEmail = '';
  enteredPassword = '';
  confirmPassword = '';

  login() {
    axios.post('http://localhost:8000/user/auth/login', {email: this.enteredEmail, password: this.enteredPassword})
      .then(function (response) {
        console.log(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  register() {
    axios.post('http://localhost:8000/user/auth/register', {email: this.enteredEmail, password: this.enteredPassword})
      .then(function (response) {
        console.log(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}
