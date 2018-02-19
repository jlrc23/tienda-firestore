import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    SharedModule
  ],
  declarations: [FormComponent, RegisterComponent],
  providers: [AuthService]
})
export class AuthModule { }
