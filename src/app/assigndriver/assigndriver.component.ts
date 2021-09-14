import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { RouteservicesService } from '../services/routeservices.service';
import { DriverservicesService } from '../services/driverservices.service';

@Component({
  selector: 'app-assigndriver',
  templateUrl: './assigndriver.component.html',
  styleUrls: ['./assigndriver.component.css']
})
export class AssigndriverComponent implements OnInit {

   items = [];
   pageOfItems: Array<any>;
   drivers = [];

   routeId:string; 
   routeNo:string;
   routedata:any;
   constructor(private route: ActivatedRoute,private router: Router,private routeservicesService:RouteservicesService,private driverservicesService:DriverservicesService) {

  		this.route.queryParams.subscribe(params => {
  			  this.routeNo = +params['routeno'] || 0;
          this.routeId = +params['routeid'] || 0;

               this.routeservicesService.getRouteInfo(this.routeNo).subscribe(result => {
  					   this.routedata = result[0];
  				});
          
  					
  		 });
  }

  ngOnInit(): void {

   this.driverservicesService.getDriverslist().subscribe(jsonData =>{
        this.drivers = jsonData;
        this.items = this.drivers.map((x, i) => ({id: x.id,firstName: x.firstName,lastName: x.lastName,gender:x.gender,dob: x.dob,age: x.age,address:x.address,city:x.city,region:x.region,country:x.country,email:x.email,
        phone:x.phone,licenceid:x.licenceid,available:x.available,vehicleid:x.vehicleid}));

      });

  }

  onChangePage(pageOfItems: Array<any>) {
        // update current page of items
       this.pageOfItems = pageOfItems;   
       this.numberofdrivers = this.pageOfItems.length;
  }



  goToRouteEditPage(){
        this.router.navigate(['/adminpage/routeeditpage'],{ queryParams: { id: this.routeNo,routeid: this.routeId } });

  }

  gotoprofilepage(item) {
  	
    this.router.navigate(['/adminpage/driverprofile'],{ queryParams: { id: item.id } });

  }

   goToPickuptime(item){
           
      this.router.navigate(['/pickuptime'],{ queryParams: { id: item.id } });

  }
}
