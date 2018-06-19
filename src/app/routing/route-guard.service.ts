import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public backendService: BackendService, public router: Router) {}
  
  canActivate(): boolean {
    if (this.backendService.getSession() === null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
