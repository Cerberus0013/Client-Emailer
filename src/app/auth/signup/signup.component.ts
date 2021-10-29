import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUserName } from '../validators/unique-user-name';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl(' ', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ], [this.uniqueUsername.validate]),
    password: new FormControl(' ', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl(' ', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]),
  }, {validators: [this.matchPassword.validate] });
  constructor(private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUserName) {}

  ngOnInit(): void {
    console.log(this.authForm)
  }
}
