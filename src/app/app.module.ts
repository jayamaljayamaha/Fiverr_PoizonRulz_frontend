import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MainMenuComponent,
    ProjectDetailComponent,
    HomeComponent,
    ProfileComponent,
    TopMenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
