import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from "angular2-materialize";
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UploadDocsComponent } from './pages/upload-docs/upload-docs.component';
import { ServerComponent } from './pages/server/server.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { EntityComponent } from './pages/server/entity/entity.component'
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
   {
      path: 'dashboard', component: DashboardComponent, children: [
        { path: 'upload', component: UploadDocsComponent },
        { path: 'server', component: ServerComponent }
      ]
    },
    {
      path:'', component : LoginComponent
    }
];

@NgModule ({
   imports: [ BrowserModule,
   FormsModule,
   BrowserAnimationsModule,
   ReactiveFormsModule,
   HttpClientModule,
   MaterializeModule,
   RouterModule.forRoot(appRoutes)],
   declarations: [ AppComponent,DashboardComponent, SidebarComponent, UploadDocsComponent, ServerComponent, LoginComponent, EntityComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
