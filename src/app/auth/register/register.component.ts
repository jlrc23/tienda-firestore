import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { SnackService } from '@common/snack.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
