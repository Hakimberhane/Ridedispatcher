import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder,FormControl,FormArray,Validators} from '@angular/forms';

import { RouteservicesService } from '../services/routeservices.service';
import { DriverservicesService } from '../services/driverservices.service';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-routeeditpage',
  templateUrl: './routeeditpage.component.html',
  styleUrls: ['./routeeditpage.component.css']
})
export class RouteeditpageComponent implements OnInit {

routeNo:any;

 registerRouteForm = new FormGroup({
      routeno: new FormControl('', [Validators.required, Validators.minLength(3)]),
      subrouteno: new FormControl('', [Validators.required, Validators.minLength(3)]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      region: new FormControl('', [Validators.required, Validators.minLength(3)]),
      numberofstops: new FormControl('', [Validators.required]),
      distance: new FormControl('', [Validators.required]),
      fare: new FormControl('', [Validators.required]),
      departureaddress: new FormControl('', [Validators.required]),
      departurelongitude: new FormControl('', [Validators.required]),
      departurelatitude: new FormControl('', [Validators.required]),
      destinationaddress: new FormControl('', [Validators.required]),
      destinationlongitude: new FormControl('', [Validators.required]),
      destinationlatitude: new FormControl('', [Validators.required]),

      stops: this.fb.array([]),
      dateCreated: new FormControl(''),
  });

constructor(private angularFirestore:AngularFirestore,private route: ActivatedRoute,private router: Router,private routeservicesService:RouteservicesService,private driverservicesService:DriverservicesService,private fb:FormBuilder) {

   alert("this is the edit page");
   this.route.queryParams.subscribe(params => {

	   this.routeNo = +params['id'] || 0;
     this.routeId = +params['routeid'] || 0;

	   this.retrieveRouteInfo(this.routeNo);
       console.log("route Id");
       console.log(this.routeNo);             				
    });
}

ngOnInit(): void {

}

get stops(): FormArray { return this.registerRouteForm.get('stops') as FormArray; }

   newStop(): FormGroup {

	  return this.fb.group({
	     address: '',
	     longitude:'',
	     latitude:'',
	  })
}

 removeStop() {
   // this.stops.removeAt(i);
  // var elemen = this.stops.pop();
       console.log(this.registerRouteForm.value.stops);
  }

  addStops() {
     this.stops.push(this.newStop());
  }



retrieveRouteInfo(routeNo) {

    this.routeservicesService.obtainRouteProfile(routeNo).subscribe(doc => {
         console.log('firstname value changed')
         this.routeInfo = doc[0];
          console.log(this.routeInfo);
         this.registerRouteForm.controls.routeno.setValue(this.routeInfo.routeno);
         this.registerRouteForm.controls.subrouteno.setValue(this.routeInfo.subrouteno);
         this.registerRouteForm.controls.city.setValue(this.routeInfo.city);
         this.registerRouteForm.controls.region.setValue(this.routeInfo.region);
         this.registerRouteForm.controls.numberofstops.setValue(this.routeInfo.numberofstops);
         this.registerRouteForm.controls.distance.setValue(this.routeInfo.distance);
         this.registerRouteForm.controls.fare.setValue(this.routeInfo.fare);

         this.registerRouteForm.controls.departureaddress.setValue(this.routeInfo.departureaddress);
         this.registerRouteForm.controls.departurelongitude.setValue(this.routeInfo.departurelongitude);
         this.registerRouteForm.controls.departurelatitude.setValue(this.routeInfo.departurelatitude);
         this.registerRouteForm.controls.destinationaddress.setValue(this.routeInfo.destinationaddress);
         this.registerRouteForm.controls.destinationlongitude.setValue(this.routeInfo.destinationlongitude);

         this.registerRouteForm.controls.destinationlatitude.setValue(this.routeInfo.destinationlatitude);
         this.registerRouteForm.controls.dateCreated.setValue(this.routeInfo.dateCreated); 
         this.registerRouteForm.controls.stops.setValue(this.routeInfo.stops);
     
    })

}


retrieveRouteInfoii(routeNo) {
       this.routeservicesService.getRouteInfo().forEach(data =>{
	       data.forEach((doc)=> {  

	           if(doc.routeno== routeNo) {
                 this.routeInfo = doc;

                 this.registerRouteForm.controls.routeno.setValue(this.routeInfo.routeno);
                 this.registerRouteForm.controls.subrouteno.setValue(this.routeInfo.subrouteno);
                 this.registerRouteForm.controls.city.setValue(this.routeInfo.city);
                 this.registerRouteForm.controls.region.setValue(this.routeInfo.region);
                 this.registerRouteForm.controls.numberofstops.setValue(this.routeInfo.numberofstops);
                 this.registerRouteForm.controls.distance.setValue(this.routeInfo.distance);
                 this.registerRouteForm.controls.fare.setValue(this.routeInfo.fare);

                 this.registerRouteForm.controls.departureaddress.setValue(this.routeInfo.departureaddress);
                 this.registerRouteForm.controls.departurelongitude.setValue(this.routeInfo.departurelongitude);
                 this.registerRouteForm.controls.departurelatitude.setValue(this.routeInfo.departurelatitude);
                 this.registerRouteForm.controls.destinationaddress.setValue(this.routeInfo.destinationaddress);
                 this.registerRouteForm.controls.destinationlongitude.setValue(this.routeInfo.destinationlongitude);

                 this.registerRouteForm.controls.destinationlatitude.setValue(this.routeInfo.destinationlatitude);
                 this.registerRouteForm.controls.stops.setValue(this.routeInfo.stops);
                 this.registerRouteForm.controls.dateCreated.setValue(this.routeInfo.dateCreated);

              
	           }
           
           });
      })
  }


 updateData() {

     let routeDocId =   this.registerRouteForm.controls.routeno.value + "-"  
                                                       +this.registerRouteForm.value.subrouteno;
     console.log(routeDocId);
     this.angularFirestore.collection("Routes").doc(routeDocId).set(this.registerRouteForm.value)
           .then(function() {
                console.log("Document successfully saved !");
           })
           .catch(error => {
               console.log('Something is wrong storing data in patients collection:', error.message);
           });
 }
}
