import { Component, OnInit } from '@angular/core';
import { RouteservicesService } from '../services/routeservices.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routeschedules',
  templateUrl: './routeschedules.component.html',
  styleUrls: ['./routeschedules.component.css']
})
export class RouteschedulesComponent implements OnInit {

    items = [];
    pageOfItems: Array<any>;
    routes:[]
    numbersofroutes:number; 

  constructor(private route: ActivatedRoute,private router: Router,private routeservicesService:RouteservicesService) {

	  this.routeservicesService.getRouteSchedules().subscribe(jsonData =>{
	        this.routes = jsonData;
	        console.log("routes");
	        console.log(this.routes);
	        this.items = this.routes.map((x, i) => ({ id: (i + 1), routeId: x.routeId,subrouteno: x.subrouteno,driverId: x.driverId,mondayHrs: x.mondayHrs,tuesdayHrs: x.tuesdayHrs,wednesdayHrs: x.wednesdayHrs,thursdayHrs:x.thursdayHrs,fridayHrs:x.fridayHrs,satdayHrs:x.satdayHrs,departure:x.departure,
	        destination:x.destination,fare:x.fare,dateBooked:x.dateBooked}));

	      });
 }

  ngOnInit(): void {


  }

  onChangePage(pageOfItems: Array<any>) {
        // update current page of items
     this.pageOfItems = pageOfItems;  
     this.numbersofproviders = this.pageOfItems.length;
         
  }

  goToBookingPage(item){


   let navigationExtras: NavigationExtras = {
    queryParams: {
        "data": JSON.stringify(item)
    }
  };

  this.router.navigate(['/routesbooked'],  navigationExtras);
  	
  	console.log("booked");
  	console.log(item);
     //   this.router.navigate(['/adminpage/routesbooked']);
      //  this.shareddataserviceService.updateRouteData(item);
  	   //  this.router.navigate(['/adminpage/routesbooked'],{ queryParams: { item: item } });

  }


}


