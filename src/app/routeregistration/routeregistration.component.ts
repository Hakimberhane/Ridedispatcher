import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,FormArray,Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-routeregistration',
  templateUrl: './routeregistration.component.html',
  styleUrls: ['./routeregistration.component.css']
})
export class RouteregistrationComponent implements OnInit {

     ynam:string="hi there";
     name = 'Angular';
     fruits = ['Apple', 'Orange', 'Banana']; 
     productForm: FormGroup;  

    submitted = false;
    initialrtid: any = 0;

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

 constructor(private angularFirestore:AngularFirestore,private angularFireAuth:AngularFireAuth,private router: Router, private activatedroute: ActivatedRoute,private fb:FormBuilder) {

    //  this.stops.push(this.newStop());
      
      this.productForm = this.fb.group({
          name: '',
          price: '',
          quantities: this.fb.array([]) ,
        });
        this.quantities().push(this.newQuantity());
          
        this.submitted = false;
  }

  ngOnInit(): void {

      var user =    this.angularFireAuth.currentUser;
      if (user) {
       console.log("I am logged in "+ user);
      } else {
       console.log("not logged in");
      }

     this.angularFirestore.collection("DatabaseInitials").doc("initials").valueChanges().subscribe(res => { 
           this.initialrtid = res.initialRouteId;
           this.initialrtid = this.initialrtid + 1;
         // this.registerPatientForm.addControl('providerId', new FormControl(this.initialrtid, Validators.required));
       });
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


SignUp() {

     this.registerRouteForm.value.stops.forEach((element,index)=>{
       if(element.address=="") this.registerRouteForm.value.stops.splice(index,1);
     })      

     console.log("form values two")
     console.log(this.registerRouteForm.value.stops);
     this.submitted = true;

     var dateCreated = new Date();
     var dateCreatedStr = dateCreated.toLocaleDateString();
     this.registerRouteForm.controls.dateCreated.setValue(dateCreatedStr);

    
    // if (this.registerRouteForm.invalid) {
     //     console.log("Validation failed");
      //    this.resetValidation();
      //    return;

    //  } else {
          let routeDocId =  this.registerRouteForm.value.routeno + "-" +this.registerRouteForm.value.subrouteno;

           
           this.angularFirestore.collection("Routes").doc(routeDocId).set(this.registerRouteForm.value)
           .then(function() {
                console.log("Document successfully saved!");
           })
           .catch(error => {
               console.log('Something is wrong storing data in patients collection:', error.message);
           });
           this.angularFirestore.collection("DatabaseInitials").doc("initials").update({initialRouteId: this.initialrtid})
           .then(function() {
                console.log("Document successfully saved!");
           })
           .catch(function(error) {   
                console.error("Error writing document: ", error);  
           });
           this.router.navigate(['/adminpage/routelist']);

    //}
  }


















  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }

  newQuantity(): FormGroup {

    return this.fb.group({
      qty: '',
      price: '',
    })

  }

   

  addQuantity() {

   alert(this.quantities().length);

    console.log(this.quantities().length);
    this.quantities().push(this.newQuantity());

   alert(this.quantities().length);

  }

   

  removeQuantity(i:number) {

    this.quantities().removeAt(i);

  }

   

  onSubmit() {

    console.log(this.productForm.value);

  }

}