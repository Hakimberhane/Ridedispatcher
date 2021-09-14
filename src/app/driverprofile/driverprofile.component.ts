import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DriverservicesService } from '../services/driverservices.service';


@Component({
  selector: 'app-driverprofile',
  templateUrl: './driverprofile.component.html',
  styleUrls: ['./driverprofile.component.css']
})
export class DriverprofileComponent implements OnInit {

   driverId:string; 
   driverprofile:any;

   constructor(private route: ActivatedRoute,private router: Router,private driverservicesService:DriverservicesService) {

     this.route.queryParams.subscribe(params => {

	      this.driverId = params["id"] || 0;
          this.retrieveprofile(this.driverId);
      
    });
   
  }

  ngOnInit(): void {

  }

  retrieveprofile(driverId) {
       this.driverservicesService.getDriverProfile().forEach(data =>{
		       data.forEach((doc)=> {         
		           if(doc.id === driverId) {
		           	 console.log("ys");
                     this.driverprofile = doc;
                     console.log(this.driverprofile.firstName);
		           }
	           
	           });
      })
  }


 goToDriverEditPage(){
        this.router.navigate(['/adminpage/drivereditpage'],{ queryParams: { id: this.driverId } });

  }
}
