import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseAuthState} from 'angularfire2';

@Component({
  selector: 'keeper-navbar',
  templateUrl: './keeper-navbar.component.html',
  styleUrls: ['./keeper-navbar.component.css']
})
export class KeeperNavbarComponent implements OnInit {

  authState: FirebaseAuthState;
  loginText: string;

  constructor(public af: AngularFire) {
    af.auth.subscribe(x => {
      this.authState = x;
      this.loginText = this.authState ? 'Logout' : 'Login';
    });
  }

  ngOnInit() {
  }

  login() {
    if (this.authState) {
      this.af.auth.logout();
    }
    else {
      this.af.auth.login();
    }
  }

}
