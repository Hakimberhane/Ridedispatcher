import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';
import { DriverservicesService } from '../services/driverservices.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-drivereditpage',
  templateUrl: './drivereditpage.component.html',
  styleUrls: ['./drivereditpage.component.css']
})
export class DrivereditpageComponent implements OnInit {

  driverInfo:any;

  registerDriverForm = new FormGroup({
	    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
	    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dob: new FormControl('', [Validators.required,Validators.pattern('[0-9]{2}/[0-9]{2}/[0-9]{4}')]),
	    gender: new FormControl('', [Validators.required]),
	    email: new FormControl('', [Validators.required, Validators.email]),
	    address: new FormControl('', [Validators.required]),
      licenceid: new FormControl('', [Validators.required]),

	    phone: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
	    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
	    region: new FormControl('', [Validators.required, Validators.minLength(3)]),
	    country: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [Validators.required]),
      availability: new FormControl('No', [Validators.required]),
      verified: new FormControl('No', [Validators.required]),

      brand: new FormControl('', [Validators.required]),
      carType: new FormControl('', [Validators.required]),
      platenumber: new FormControl('', [Validators.required]),
      ownerfirstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      ownerlastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      numberofseats: new FormControl('', [Validators.required, Validators.minLength(3)]),
      manufacturedyear: new FormControl('', [Validators.required, Validators.minLength(3)]),

      dateCreated: new FormControl(''),
      dateUpdated: new FormControl(''),

  });


  name:any;

  constructor(private angularFirestore:AngularFirestore,private route: ActivatedRoute,private router: Router,private driverservicesService:DriverservicesService) {
  
     this.route.queryParams.subscribe(params => {

	      this.driverId = params["id"] || 0;
          this.retrieveDriverInfo(this.driverId);
          console.log("driver Id");
          console.log(this.driverId);
      
    });
 }

  ngOnInit(): void {

    this.name ="Hakim";

  }


 retrieveDriverInfo(driverId) {
       this.driverservicesService.getDriverProfile().forEach(data =>{
		       data.forEach((doc)=> {         
		           if(doc.id === driverId) {
		           	 console.log("ys");
                     this.driverInfo = doc;
                     console.log(this.driverInfo.firstName);
                     this.registerDriverForm.controls.firstName.setValue(this.driverInfo.firstName);
                     this.registerDriverForm.controls.lastName.setValue(this.driverInfo.lastName);
                     this.registerDriverForm.controls.dob.setValue(this.driverInfo.dob);
                     this.registerDriverForm.controls.gender.setValue(this.driverInfo.gender);
                     this.registerDriverForm.controls.email.setValue(this.driverInfo.email);
                     this.registerDriverForm.controls.address.setValue(this.driverInfo.address);
                     this.registerDriverForm.controls.licenceid.setValue(this.driverInfo.licenceid);
                     this.registerDriverForm.controls.phone.setValue(this.driverInfo.phone);
                     this.registerDriverForm.controls.city.setValue(this.driverInfo.city);
                     this.registerDriverForm.controls.region.setValue(this.driverInfo.region);
                     this.registerDriverForm.controls.country.setValue(this.driverInfo.country);
                     this.registerDriverForm.controls.age.setValue(this.driverInfo.age);

                     this.registerDriverForm.controls.brand.setValue(this.driverInfo.brand);
                     this.registerDriverForm.controls.carType.setValue(this.driverInfo.carType);
                     this.registerDriverForm.controls.platenumber.setValue(this.driverInfo.platenumber);
                     this.registerDriverForm.controls.ownerfirstName.setValue(this.driverInfo.ownerfirstName);
                     this.registerDriverForm.controls.ownerlastName.setValue(this.driverInfo.ownerlastName);
                     this.registerDriverForm.controls.numberofseats.setValue(this.driverInfo.numberofseats);
                     this.registerDriverForm.controls.manufacturedyear.setValue(this.driverInfo.manufacturedyear);
                     this.registerDriverForm.controls.dateUpdated.setValue(this.driverInfo.dateUpdated);


		           }
	           
	           });
      })
  }


   updateData() {

     let record = {}; 
     this.submitted = true;

     console.log("record");
     console.log(this.registerDriverForm.value);

     var dateUpdated = new Date();
     var dateUpdatedStr = dateUpdated.toLocaleDateString();
     this.registerDriverForm.controls.dateUpdated.setValue(dateUpdatedStr);

     var timeDiff = Math.abs(Date.now() - new Date(this.registerDriverForm.controls.dob.value).getTime());
     let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
     this.registerDriverForm.controls.age.setValue(age);

     let driverIdTostring  =  JSON.stringify(this.initialdrid);


   var carObj = {
      brand: this.registerDriverForm.controls.brand.value,
      carType: this.registerDriverForm.controls.carType.value,
      platenumber: this.registerDriverForm.controls.platenumber.value,
      ownerfirstName: this.registerDriverForm.controls.ownerfirstName.value,
      ownerlastName:this.registerDriverForm.controls.ownerlastName.value,
      numberofseats:this.registerDriverForm.controls.numberofseats.value,
      manufacturedyear:this.registerDriverForm.controls.manufacturedyear.value,
      dateCreated:this.registerDriverForm.controls.dateCreated.value,  
   //   dateUpdated:dateUpdatedStr,  
      driverId:this.driverId

     }

     console.log("car object");
     console.log(carObj);
     console.log(this.driverId);
     let driverIdStr = JSON.stringify(this.driverId);
     console.log(this.registerDriverForm.controls.lastName.value);
     console.log(this.registerDriverForm.value);
     console.log("try");
     console.log(driverIdStr);

    // if (this.registerDriverForm.invalid) {
     //     console.log("Validation failed");
      //    this.resetValidation();
      //    return;

    //  } else {

           this.angularFirestore.collection("Drivers").doc(this.driverId).set(this.registerDriverForm.value)
           .then(function() {
                console.log("Document successfully saved one 11!");
           })
           .catch(error => {
               console.log('Something is wrong storing data in patients collection:', error.message);
           });



        
        
         console.log("jjyes");
         console.log(this.registerDriverForm.controls.platenumber.value);
         var docId = this.registerDriverForm.controls.platenumber.value;
         var docIdStr = JSON.stringify(docId);
           this.angularFirestore.collection("Vehicles").doc(docIdStr).set(carObj)
           .then(function() {
                console.log("car object 2");

                console.log("Document successfully saved 2!");
           })
           .catch(error => {
               console.log('Something is wrong storing data in patients collection:', error.message);
           });

           this.router.navigate(['/driverlist']);
    //}
  }


}
