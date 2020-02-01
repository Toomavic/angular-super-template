import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: {
      title: 'Users'
    }
  }
];

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class UsersModule {}
