import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteservicesService {

  constructor(private angularFirestore:AngularFirestore) {}

  getRouteslist() {
      return this.angularFirestore.collection('Routes').snapshotChanges()
          .pipe(map(actions => actions.map(a => {
            const object = a.payload.doc.data();
              object.id = a.payload.doc['id']
              return object;
          })));
   }


 getRouteInfo(routeno) {
  
   return this.angularFirestore.collection('Routes',ref => ref.where('routeno', '==', routeno.toString())).valueChanges();
 }

 assignaDriver(assignObj) {

   alert("myob");
   console.log("jmy ob");
   console.log(assignObj);
   console.log("jmy ob1");

   var docRef = this.angularFirestore.collection("RouteDriverRelationship").add(assignObj);
          console.log("jmy ob1");

  docRef.then((data) => {
            console.log("Successfuly a route is created");
            console.log(data);
        })
        .catch(function(e) {
            console.log(e);
        })
   
   }

   getRouteSchedules() {
      return this.angularFirestore.collection('RouteDriverRelationship').snapshotChanges()
          .pipe(map(actions => actions.map(a => {
            const object = a.payload.doc.data();
              object.id = a.payload.doc.id;
              return object;
          })));
   }

 getRouteInfo2() {

     return this.angularFirestore.collection('Routes').snapshotChanges()
              .pipe(map(actions => actions.map(a => {
                const object = a.payload.doc.data();
                  object.id = a.payload.doc.id;
                  console.log("route info");
                  console.log(object);
                  return object;
      })));   
}

///// new ones

 getRouteProfile(routeId) {

  //   return  this.angularFirestore.collection<Provider>('Routes').doc(routeId.toString()).valueChanges();
     return this.angularFirestore.collection('Providers',ref => ref.where('routeno', '==', routeId.toString())).valueChanges();

  }

  obtainRouteProfile(routeId) {

      alert("jkj");
      alert(routeId);
 return this.angularFirestore.collection('Routes',ref => ref.where('routeno', '==', routeId.toString())).valueChanges();

    // return  this.angularFirestore.collection('Routes').doc(routeId.toString()).ref;

  }



}