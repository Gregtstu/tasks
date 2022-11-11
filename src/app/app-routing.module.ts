import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./pages/shared/main-layout/main-layout.component";
import {NewTasksComponent} from "./pages/new-tasks/new-tasks.component";
import {AllTasksComponent} from "./pages/all-tasks/all-tasks.component";

const routes: Routes = [
  {
    path:'', component:MainLayoutComponent, children:[
      {path:'', redirectTo:'/create', pathMatch:'full'},
      {path:'create', component:NewTasksComponent},
      {path:'allTasks', component:AllTasksComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
