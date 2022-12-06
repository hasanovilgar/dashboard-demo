import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import {HomeRoutingModule} from "./home-routing.module";
import { StatisticsComponent } from './pages/home/components/statistics/statistics.component';
import { VisitorsComponent } from './pages/home/components/visitors/visitors.component';
import {NgChartsModule} from "ng2-charts";
import { TotalComponent } from './pages/home/components/total/total.component';
import { NewUsersComponent } from './pages/home/components/new-users/new-users.component';
import { SubscribersComponent } from './pages/home/components/subscribers/subscribers.component';
import { LocationsComponent } from './pages/home/components/locations/locations.component';



@NgModule({
  declarations: [
    HomeComponent,
    StatisticsComponent,
    VisitorsComponent,
    TotalComponent,
    NewUsersComponent,
    SubscribersComponent,
    LocationsComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgChartsModule
    ]
})
export class HomeModule { }
