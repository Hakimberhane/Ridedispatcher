import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouteservicesService } from '../services/routeservices.service';

import { ShareddataserviceService } from '../services/shareddataservice.service';

@Component({
  selector: 'app-routelist',
  templateUrl: './routelist.component.html',
  styleUrls: ['./routelist.component.css']
})
export class RoutelistComponent implements OnInit {

  items = [];
  pageOfItems: Array<any>;
  routes = [];
  numbersofpatients:number;
  public text: string = 'Assign';

  private routeData = {};

  constructor(private router: Router,private routeservicesService:RouteservicesService,private shareddataserviceService:ShareddataserviceService ) {}

  ngOnInit(): void {

   this.routeservicesService.getRouteslist().subscribe(jsonData =>{
        this.routes = jsonData;
        this.items = this.routes.map((x, i) => ({id: x.id,routeno: x.routeno,subrouteno: x.subrouteno,city: x.city,region:x.region,departureaddress: x.departureaddress,departurelongitude: x.departurelongitude,departurelatitude:x.departurelatitude,destinationaddress:x.destinationaddress,destinationlongitude:x.destinationlongitude,destinationlatitude:x.destinationlatitude,fare:x.fare,
        numberofstops:x.numberofstops,distance:x.distance,pickups:x.pickups}));

         console.log(this.items);
      });
  }

 onChangePage(pageOfItems: Array<any>) {
        // update current page of items
       this.pageOfItems = pageOfItems;   
       this.numbersofpatients = this.pageOfItems.length;
  }

  assigndriver(item){
         this.shareddataserviceService.updateRouteData(item);
  	     this.router.navigate(['/assigndriver'],{ queryParams: { routeno: item.routeno,routeid:item.id } });
  }

}
