import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from'./home/home.component';
import { RouteregistrationComponent } 
                       from'./routeregistration/routeregistration.component';
import { RouteeditpageComponent } 
                       from'./routeeditpage/routeeditpage.component';
import { AdminpageComponent } from'./adminpage/adminpage.component';
import { VehicleslistComponent } 
                       from'./vehicleslist/vehicleslist.component';
import { RoutelistComponent } 
                       from'./routelist/routelist.component';
import {DriverregistrationComponent } 
                       from'./driverregistration/driverregistration.component';
import {DrivereditpageComponent } 
                       from'./drivereditpage/drivereditpage.component';
import {DriverlistComponent } 
                       from'./driverlist/driverlist.component';
import {AssigndriverComponent } 
                       from'./assigndriver/assigndriver.component';
import {DriverprofileComponent } 
                       from'./driverprofile/driverprofile.component';
import {PickuptimeComponent } 
                       from'./pickuptime/pickuptime.component';
import {RouteschedulesComponent } 
                       from'./routeschedules/routeschedules.component';
import {RoutesbookedComponent } 
                       from'./routesbooked/routesbooked.component';

const routes: Routes = [{path: 'home' , component:HomeComponent}, 
                        {path: '',  redirectTo: '/home', pathMatch: 'full'},	
                        {path: 'vehicleslist' , component:VehicleslistComponent},
                        {path: 'driverlist' , component:DriverlistComponent},
                        {path: 'assigndriver' , component:AssigndriverComponent},
                        {path: 'pickuptime' , component:PickuptimeComponent},
                        {path: 'routeschedules' , component:RouteschedulesComponent},
                         {path: 'routesbooked' , component:RoutesbookedComponent},

                        { path: 'adminpage', 
                                 component: AdminpageComponent,				   
							     children: [
							           {path: '',        
							               redirectTo: 'routeregistration', pathMatch: 'full',
							           },
							           {path: 'routeregistration' , component:RouteregistrationComponent},
                         {path: 'routeeditpage' , component:RouteeditpageComponent},

							           {path: 'routelist' , component:RoutelistComponent},
							           {path: 'driverregistration' , component:DriverregistrationComponent},
                         {path: 'drivereditpage' , component:DrivereditpageComponent},
                         {path: 'driverprofile' , component:DriverprofileComponent},

							     ]
					     }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
