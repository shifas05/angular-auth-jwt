import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/containers/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { RandomGuard } from './auth/guards/random.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'app',
    loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule),
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  }
  // {
  //   path: 'app',
  //   component: DefaultComponent,
  //   canActivate: [RandomGuard],
  //   canLoad: [RandomGuard],
  //   children: [{
  //     path: '',
  //     component: DashboardComponent
  //   }, {
  //     path: 'posts',
  //     component: PostsComponent
  //   }]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
