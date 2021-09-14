import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriverservicesService {

  constructor(private angularFirestore:AngularFirestore) {}

  getDriverslist() {

      return this.angularFirestore.collection('Drivers').snapshotChanges()
          .pipe(map(actions => actions.map(a => {
            const object = a.payload.doc.data();
            object.id = a.payload.doc['id']
              return object;
          })));
   }

  getDriverProfile() {

     return this.angularFirestore.collection('Drivers').snapshotChanges()
              .pipe(map(actions => actions.map(a => {
                const object = a.payload.doc.data();
                  object.id = a.payload.doc.id;
                  return object;
      })));   
}

 getVehicleslist() {

      return this.angularFirestore.collection('Vehicles').snapshotChanges()
          .pipe(map(actions => actions.map(a => {
            const object = a.payload.doc.data();
            object.id = a.payload.doc['id']
              return object;
          })));
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
}