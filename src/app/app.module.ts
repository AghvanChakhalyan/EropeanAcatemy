import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './pages/home/home.component';
import {StaffComponent} from './pages/staff/staff.component';
import {AboutComponent} from './pages/about/about.component';
import {StudentsComponent} from './pages/students/students.component';
import {ServicesComponent} from './pages/services/services.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';


const appRouters: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    StaffComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
