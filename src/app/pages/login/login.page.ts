import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import { AppState } from 'src/store/AppState';
import { Store } from '@ngrx/store';
import { hide, show } from 'src/store/loading/loading.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<AppState> ) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm()
  }

  forgotEmailPassword(){
    this.store.dispatch(show())

    setTimeout(() => {
      this.store.dispatch(hide())
    }, 3000)
  }

  login() {
    this.router.navigate(['home'])
  }
  register() {
    this.router.navigate(['register'])
  }
}
