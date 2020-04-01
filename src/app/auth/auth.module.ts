import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RandomGuard } from './guards/random.guard';
import { TokenInterceptor } from './token.interceptor';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent],
  providers: [
    AuthGuard,
    AuthService,
    RandomGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
