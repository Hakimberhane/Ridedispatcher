import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouteregistrationComponent } from './routeregistration/routeregistration.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { VehicleslistComponent } from './vehicleslist/vehicleslist.component';
import { RoutelistComponent } from './routelist/routelist.component';
import { DriverregistrationComponent } from './driverregistration/driverregistration.component';
import { DriverlistComponent } from './driverlist/driverlist.component';
import { AssigndriverComponent } from './assigndriver/assigndriver.component';

import 'firebase/firestore';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { RouteservicesService } from './services/routeservices.service';
import { JwPaginationModule } from 'jw-angular-pagination';
import { RouteeditpageComponent } from './routeeditpage/routeeditpage.component';
import { DrivereditpageComponent } from './drivereditpage/drivereditpage.component';
import { DriverprofileComponent } from './driverprofile/driverprofile.component';
import { PickuptimeComponent } from './pickuptime/pickuptime.component';
import { RouteschedulesComponent } from './routeschedules/routeschedules.component';
import { RoutesbookedComponent } from './routesbooked/routesbooked.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RouteregistrationComponent,
    AdminpageComponent,
    VehicleslistComponent,
    RoutelistComponent,
    DriverregistrationComponent,
    DriverlistComponent,
    AssigndriverComponent,
    RouteeditpageComponent,
    DrivereditpageComponent,
    DriverprofileComponent,
    PickuptimeComponent,
    RouteschedulesComponent,
    RoutesbookedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFireDatabaseModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule,// Only required for storage features
    JwPaginationModule
  ],
  providers: [RouteservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

