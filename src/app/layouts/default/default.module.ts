import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { DefaultRoutingModule } from './default.routing.module';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DefaultRoutingModule
  ]
})
export class DefaultModule { }
