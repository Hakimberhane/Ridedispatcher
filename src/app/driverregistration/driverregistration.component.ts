import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-driverregistration',
  templateUrl: './driverregistration.component.html',
  styleUrls: ['./driverregistration.component.css']
})

export class DriverregistrationComponent implements OnInit {

    submitted = false;
    initialdrid: any = 0;

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

  constructor(private angularFirestore:AngularFirestore,private angularFireAuth:AngularFireAuth,private router: Router, private activatedroute: ActivatedRoute) {
	    
	     this.submitted = false;
       this.angularFirestore.collection("DatabaseInitials").doc("initials").valueChanges().subscribe(res => { 
           this.initialdrid = res.initialDriverId;
           this.initialdrid = this.initialdrid + 1;
       });
  }

  ngOnInit(): void {

      var user =    this.angularFireAuth.currentUser;
      if (user) {
       console.log("I am logged in "+ user);
      } else {
       console.log("not logged in");
      }

  }

   SignUp() {


     let record = {}; 
     this.submitted = true;

     console.log("record");
     console.log(this.registerDriverForm.value);

     var dateCreated = new Date();
     var dateCreatedStr = dateCreated.toLocaleDateString();
     this.registerDriverForm.controls.dateCreated.setValue(dateCreatedStr);

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
      dateCreated:dateCreatedStr,
      dateUpdated:"",
      driverId:driverIdTostring
     }

     console.log("car object");
     console.log(carObj);

    // if (this.registerDriverForm.invalid) {
     //     console.log("Validation failed");
      //    this.resetValidation();
      //    return;

    //  } else {
        

        	 this.angularFirestore.collection("Drivers").doc(driverIdTostring).set(this.registerDriverForm.value)
           .then(function() {
                console.log("Document successfully saved!");
           })
        	 .catch(error => {
        		   console.log('Something is wrong storing data in patients collection:', error.message);
        	 });
           this.angularFirestore.collection("Vehicles").doc(this.registerDriverForm.controls.platenumber.value).set(carObj)
           .then(function() {
                console.log("Document successfully saved!");
           })
           .catch(error => {
               console.log('Something is wrong storing data in patients collection:', error.message);
           });






           this.angularFirestore.collection("DatabaseInitials").doc("initials").update({initialDriverId:this.initialdrid})
           .then(function() {
                console.log("Document successfully saved!");
           })
           .catch(function(error) {   
                console.error("Error writing document: ", error);  
           });
        	 this.router.navigate(['/driverlist']);
    //}
  }

}
