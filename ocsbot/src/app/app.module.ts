import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from "angular2-materialize";
import { SidebarComponent } from './sidebar/sidebar.component';
import { UploadDocsComponent } from './upload-docs/upload-docs.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerComponent } from './server/server.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
   {
      path: 'dashboard', component: DashboardComponent, children: [
        { path: 'upload-docs', component: UploadDocsComponent },
        { path: 'start-server', component: ServerComponent },
      ]
    },
    {
      path:'', component : LoginComponent
    }
];

@NgModule ({
   imports: [ BrowserModule,
   FormsModule,
   HttpClientModule,
   MaterializeModule,
   RouterModule.forRoot(appRoutes)],
   declarations: [ AppComponent,DashboardComponent, SidebarComponent, UploadDocsComponent, ServerComponent, LoginComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
