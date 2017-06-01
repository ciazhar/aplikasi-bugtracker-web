import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  exports: [ ],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class SharedModule { }
