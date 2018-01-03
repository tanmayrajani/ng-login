import {Component} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: ''
  }

  errorMessage = ''

  handleSignIn() {
    if (!this.user.username || !this.user.password) {
      this.errorMessage = 'username or password empty :('
      return;
    }

    if (this.user.username === 'tanmay' && this.user.password === 'rajani') {
      this.errorMessage = ''
      this.router.navigateByUrl('/home');
    } else {
      this.errorMessage = 'username or password wrong! :('      
    }
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
