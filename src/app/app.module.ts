import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/shared/main-layout/main-layout.component';
import { NewTasksComponent } from './pages/new-tasks/new-tasks.component';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NewTasksComponent,
    AllTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
