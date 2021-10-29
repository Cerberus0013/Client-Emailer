import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { AbstractControl, AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueUserName implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: AbstractControl) => {
    const { value } = control;

    return this.authService.userNameAvailable(value).pipe(
        map((value) => {
          if (value.available) {
            return null;
          } else {
            return null;
          }
        }),
        catchError((err) => {
          if (err.message.username) {
            return of({ nonUniqueUserName: true });
          } else {
            return of({ noConnection: true });
          }
        })
      );
  };
}
