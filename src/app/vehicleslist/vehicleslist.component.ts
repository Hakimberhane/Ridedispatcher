import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DriverservicesService } from '../services/driverservices.service';

@Component({
  selector: 'app-vehicleslist',
  templateUrl: './vehicleslist.component.html',
  styleUrls: ['./vehicleslist.component.css']
})
export class VehicleslistComponent implements OnInit {

    items = [];
    pageOfItems: Array<any>;
    vehicles = [];
    numbersofvehicles:number;
   
   
   constructor(private router: Router,private driverservicesService:DriverservicesService) {}

 
   ngOnInit(): void {

   this.driverservicesService.getVehicleslist().subscribe(jsonData =>{
        this.vehicles = jsonData;
        this.items = this.vehicles.map((x, i) => ({id: x.id,brand: x.brand,carType: x.carType,platenumber:x.platenumber,ownerfirstName:x.ownerfirstName,ownerlastName: x.ownerlastName,numberofseats:x.numberofseats,manufacturedyear:x.manufacturedyear,dateCreated:x.dateCreated,driverId:x.driverId}));

         console.log(this.items);
      });
  }

  onChangePage(pageOfItems: Array<any>) {
        // update current page of items
       this.pageOfItems = pageOfItems;  
       this.numbersofvehicles = this.pageOfItems.length;
         
  }

  verify(item){

    
  }

  goToProviderDetail(item) {
   //  this.router.navigate(['/admpage/admproviderprofile'],{ queryParams: { //providerId: item.providerId } });
  }

}
