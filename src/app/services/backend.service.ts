import { Router } from '@angular/router';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Session } from '../interfaces';
import { RestService } from './rest.service';

@Injectable()
export class BackendService {

  @Output() loggedIn = new EventEmitter<any>();
  @Output() loggedOut = new EventEmitter<any>();

   private session: Session;
/*  private session: Session = {
      sessionkey: "testsessionkey"
  };*/

  constructor(private restService: RestService, private router: Router) {}

  //#region Verwaltung der Session 
  public getSession(): Session {
    if (!this.session) {
      this.session = JSON.parse(localStorage.getItem('session'));
    }
    return this.session;
  }

  public setSession(session: Session) {
    this.session = session;
    localStorage.setItem('session', JSON.stringify(session));
    this.loggedIn.emit();
  }

  public removeSession() {
    this.session = null;
    localStorage.removeItem('session');
    this.loggedOut.emit();
    this.router.navigate(['/login']);
  }
  //#endregion  
}
