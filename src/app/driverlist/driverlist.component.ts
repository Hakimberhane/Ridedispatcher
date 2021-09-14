import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DriverservicesService } from '../services/driverservices.service';

@Component({
  selector: 'app-driverlist',
  templateUrl: './driverlist.component.html',
  styleUrls: ['./driverlist.component.css']
})
export class DriverlistComponent implements OnInit {

  items = [];
  pageOfItems: Array<any>;
  drivers = [];
  numberofdrivers:number;
  public text: string = 'Assign';

  constructor(private router: Router,private driverservicesService:DriverservicesService) {}

  ngOnInit(): void {

   this.driverservicesService.getDriverslist().subscribe(jsonData =>{
        this.drivers = jsonData;
        this.items = this.drivers.map((x, i) => ({id: x.id,firstName: x.firstName,lastName: x.lastName,gender:x.gender,dob: x.dob,age: x.age,address:x.address,city:x.city,region:x.region,country:x.country,email:x.email,
        phone:x.phone,licenceid:x.licenceid,availability:x.availability,platenumber:x.platenumber}));

           console.log(this.items);
      });
    
  }

 onChangePage(pageOfItems: Array<any>) {
        // update current page of items
       this.pageOfItems = pageOfItems;   
       this.numberofdrivers = this.pageOfItems.length;
  }


 gotoprofilepage(item){

    this.router.navigate(['/adminpage/driverprofile'],{ queryParams: { id: item.id } });

  }
}
